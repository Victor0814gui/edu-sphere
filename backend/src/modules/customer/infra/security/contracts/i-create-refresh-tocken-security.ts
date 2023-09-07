import dayjs from "dayjs"
import { inject, injectable } from "tsyringe";
import { ICreateRefreshTokenRepository } from "@customer/repositories/i-create-refresh-token-repository";
import crypto from "crypto";

export namespace IGenerateRefreshToken {
  export type Params = {
    customerId: string;
  }

  export type Response = Promise<string>;

  export type Implementation = {
    execute: (userId: IGenerateRefreshToken.Params)
      => IGenerateRefreshToken.Response;
  }
}