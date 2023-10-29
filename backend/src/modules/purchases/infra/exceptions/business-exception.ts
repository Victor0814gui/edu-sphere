


export class PurchaseBusinessException {
  public readonly message: string;
  public readonly code: number;
  public readonly type?: string;

  constructor(
    message: string,
    statusCode = 400,
    type = "error",
  ) {
    this.message = message;
    this.code = statusCode;
    this.type = type;
  }

}