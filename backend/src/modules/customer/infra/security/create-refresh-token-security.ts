import crypto from "crypto";
import { inject, injectable } from "tsyringe";
import { ICreateRefreshTokenRepository } from "@customer/repositories/i-create-refresh-token-repository";
import { IGenerateRefreshToken, RefreshTokenState } from "./contracts/i-create-refresh-tocken-security";
import { ICreateUUIDTokenService } from "../services/contracts/i-create-uuid-token-service";

@injectable()
export class GenerateRefreshToken
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

    const refreshTokenAlreadyExists = await this.createSessionTokenSecurity.findByIdUser({
      customerId: props.customerId
    })

    if (refreshTokenAlreadyExists ?) {
      return refreshTokenAlreadyExists.refreshToken;
    }

    const expiresIn = new Date();
    expiresIn.setDate(expiresIn.getDate() + expiryDate);

    const generateRefreshToken = await this.createSessionTokenSecurity.create({
      state: RefreshTokenState.Active,
      refreshToken: this.createUUIDTokenService.create({}),
      expiryDate: expiresIn,
      id: this.createUUIDTokenService.create({}),
    })

    return generateRefreshToken.refreshToken;
  }
}