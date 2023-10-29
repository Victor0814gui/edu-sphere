

export enum RefreshTokenState {
  Active = "active",
  Expired = "expired",
}

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