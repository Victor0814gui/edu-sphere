import { RefreshToken, } from "@/src/shared/application/entities/refresh-token";



declare namespace ICreateRefreshTokenRepository { }

namespace ICreateRefreshTokenRepository {
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
}

namespace ICreateRefreshTokenRepository {
  export namespace FindUniqueUser {
    export type Params = {
      customerId: string;
    }

    export type Response = Promise<RefreshToken[] | null>
  }
}

namespace ICreateRefreshTokenRepository {
  export namespace DeleteMany {
    export type Params = {
      refreshTokenId: string;
    }

    export type Response = Promise<void>;
  }
}

namespace ICreateRefreshTokenRepository {
  export type Implementation = {
    create: (props: ICreateRefreshTokenRepository.Create.Params)
      => ICreateRefreshTokenRepository.Create.Response;
    findByIdUser: (props: ICreateRefreshTokenRepository.FindUniqueUser.Params)
      => ICreateRefreshTokenRepository.FindUniqueUser.Response;
    deleteMany: (props: ICreateRefreshTokenRepository.DeleteMany.Params)
      => ICreateRefreshTokenRepository.DeleteMany.Response;
  }
}

export { ICreateRefreshTokenRepository }