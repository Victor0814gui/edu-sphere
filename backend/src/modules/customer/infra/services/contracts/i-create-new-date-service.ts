




export namespace ICreateNewDateService {
  export type Params = {} | null

  export type Response = Date;

  export type Implementation = {
    create: (props: ICreateNewDateService.Params) => ICreateNewDateService.Response
  }
}