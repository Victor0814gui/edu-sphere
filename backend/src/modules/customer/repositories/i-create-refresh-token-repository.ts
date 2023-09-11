import { RefreshToken, } from "@/src/aplication/entities/refresh-token";



export namespace ICreateRefreshTokenRepository {

  export namespace Create {
    export type Params = {
      refreshToken: string;
      expiryDate: Date;
      id: string;
      state: string;
      customerId: string;
    }

    export type Response = Promise<RefreshToken>;
  }

  export namespace FindUniqueUser {
    export type Params = {
      customerId: string;
    }

    export type Response = Promise<RefreshToken[] | null>
  }

  export namespace DeleteMany {
    export type Params = {
      refreshTokenId: string;
    }

    export type Response = Promise<void>;
  }

  export type Implementation = {
    create: (props: ICreateRefreshTokenRepository.Create.Params)
      => ICreateRefreshTokenRepository.Create.Response;
    findByIdUser: (props: ICreateRefreshTokenRepository.FindUniqueUser.Params)
      => ICreateRefreshTokenRepository.FindUniqueUser.Response;
    deleteMany: (props: ICreateRefreshTokenRepository.DeleteMany.Params)
      => ICreateRefreshTokenRepository.DeleteMany.Response;
  }
}