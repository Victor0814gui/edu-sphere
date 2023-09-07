import crypto from "crypto";
import { inject, injectable } from "tsyringe";
import { ICreateRefreshTokenRepository } from "@customer/repositories/i-create-refresh-token-repository";
import { IGenerateRefreshToken } from "./contracts/i-create-refresh-tocken-security";
import { ICreateUUIDTokenService } from "../services/contracts/i-create-uuid-token-service";

@injectable()
class GenerateRefreshToken
  implements IGenerateRefreshToken.Implementation {
  constructor(
    @inject('CreateRefreshTokenRepository')
    private createSessionTokenSecurity: ICreateRefreshTokenRepository.Implementation,
    @inject("CreateUUIDTokenService")
    private createUUIDTokenService: ICreateUUIDTokenService.Implementation
  ) { }

  async execute(props: IGenerateRefreshToken.Params):
    IGenerateRefreshToken.Response {
    const expiryDate = parseInt(process.env.REFRESH_TOKEN_EXPIRES_TIME as string);

    // const refreshTokenAlreadyExists = await this.createSessionTokenSecurity.findById({
    //   refreshTokenId: props.customerId
    // })

    // if (!!refreshTokenAlreadyExists?.id) {
    //   return refreshTokenAlreadyExists.refreshToken;
    // }

    const expiresIn = new Date();
    expiresIn.setDate(expiresIn.getDate() + expiryDate);

    const generateRefreshToken = await this.createSessionTokenSecurity.create({
      refreshToken: this.createUUIDTokenService.create({}),
      expiryDate: expiresIn,
      id: this.createUUIDTokenService.create({}),
    })

    return generateRefreshToken.refreshToken;
  }
}

export { GenerateRefreshToken };