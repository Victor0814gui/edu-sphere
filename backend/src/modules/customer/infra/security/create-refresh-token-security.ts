import dayjs from "dayjs"
import { inject, injectable } from "tsyringe";
import { ICreateRefreshTokenRepository } from "@customer/repositories/i-create-refresh-token-repository";
import crypto from "crypto";

@injectable()
class GenerateRefreshToken {
  constructor(
    @inject('CreateRefreshTokenRepository')
    private createSessionTokenSecurity: ICreateRefreshTokenRepository.Implementation
  ) { }

  async execute(userId: string): Promise<string> {
    const expiryDate = parseInt(process.env.REFRESH_TOKEN_EXPIRES_TIME as string);
    const expiresIn = dayjs().add(expiryDate, "hour").unix()

    const refreshTokenAlreadyExists = await this.createSessionTokenSecurity.findById({
      refreshTokenId: userId
    })

    if (refreshTokenAlreadyExists?.id) {
      return refreshTokenAlreadyExists.refreshToken;
    }

    const generateRefreshToken = await this.createSessionTokenSecurity.create({
      refreshToken: userId,
      expiryDate: expiresIn,
      id: crypto.randomUUID(),
    })

    return generateRefreshToken.refreshToken;
  }
}

export { GenerateRefreshToken };