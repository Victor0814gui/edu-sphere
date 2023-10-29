





export namespace IEncryptDataService {
  export type Params = string;

  export type Response = Promise<string | null>;

  export type Implementation = {
    execute: (props: IEncryptDataService.Params) => IEncryptDataService.Response
  }
}