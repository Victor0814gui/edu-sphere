



declare namespace IConvertStringInDate { }


namespace IConvertStringInDate {
  export type Params = string;
  export type Response = Date;
}

namespace IConvertStringInDate {
  export type Implementation = {
    format: (params: IConvertStringInDate.Params)
      => IConvertStringInDate.Response;
  }
}

export { IConvertStringInDate };