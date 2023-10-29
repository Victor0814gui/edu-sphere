



export namespace ICompareEncryptDataService {
  export type Params = {
    data: string;
    encrypted: string;
  }
  export type Response = Promise<boolean | null>;

  export type Implementation = {
    execute: (props: ICompareEncryptDataService.Params) => ICompareEncryptDataService.Response
  }
}