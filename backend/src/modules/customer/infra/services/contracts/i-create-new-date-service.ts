




export namespace ICreateNewDateService {
  export type Params = void;

  export type Response = Date;

  export type Implementation = {
    create: (props: ICreateNewDateService.Params) => ICreateNewDateService.Response
  }
}