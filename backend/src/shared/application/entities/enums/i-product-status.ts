

export enum ProductStatusEnum {
  public = "public",
  private = "private",
}

export type ProductStatus = ProductStatusEnum.private | ProductStatusEnum.public | string;