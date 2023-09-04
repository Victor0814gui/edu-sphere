


export namespace ICreateUUIDTokenService {

  export type Params = {} | null;

  export type Response = string;

  export interface Implementation {
    create: (props: ICreateUUIDTokenService.Params) => ICreateUUIDTokenService.Response;
  }
}