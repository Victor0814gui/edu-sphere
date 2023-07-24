import dayjs from "dayjs"
import { inject, injectable } from "tsyringe";
import { CreateSessionTokenSecurity } from "./create-session-token-security";
import { ICreateRefreshTokenRepository } from "../../repositories/i-create-refresh-token-repository";


@injectable()
class GenerateRefreshToken {
  constructor(
    @inject('CreateSessionTokenSecurity')
    private createSessionTokenRepository: ICreateRefreshTokenRepository.Implementation
  ) { }

  async execute(userId: string) {
    const expiryDate = parseInt(process.env.REFRESH_TOKEN_EXPIRES_TIME as string);
    const expiresIn = dayjs().add(expiryDate, "hour").unix()

    const refreshTokenAlreadyExists = await this.createSessionTokenRepository.findById({
      refreshTokenId: userId
    })

    if (!!refreshTokenAlreadyExists) {
      return refreshTokenAlreadyExists;
    }

    const generateRefreshToken = await this.createSessionTokenRepository.create({
      refreshToken: userId,
      expiryDate: expiresIn,
    })

    return generateRefreshToken;
  }
}

export { GenerateRefreshToken };