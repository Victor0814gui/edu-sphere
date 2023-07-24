import { RefreshToken } from "@prisma/client";


export namespace ICreateRefreshTokenRepository {

  export namespace Create {
    export interface Params {
      refreshToken: Date;
      expiryDate: string;
    }

    export interface Response extends RefreshToken { }
  }

  export namespace FindUnique {
    export interface Params {
      refreshTokenId: string;
    }

    export interface Response extends RefreshToken { }
  }

  export namespace DeleteMany {
    export interface Params {
      refreshTokenId: string;
    }

    export interface Response { }

  }

  export interface Implementation {
    create(props: Create.Params): Promise<Create.Response>;
    findById(props: FindUnique.Params): Promise<FindUnique.Response | null>;
    deleteMany(props: DeleteMany.Params): Promise<DeleteMany.Response>;
  }
}