

export enum ProductTypeEnum {
  subscription = "subscription",
  product = "product",
  upgrade = "upgrade",

}

export type ProductType =
  ProductTypeEnum.product
  | ProductTypeEnum.upgrade
  | ProductTypeEnum.subscription
  | string;