





enum TransactionStatusEnum {
  active = "active",
  expired = "expired",
}

type TransactionStatus =
  TransactionStatusEnum.active
  | TransactionStatusEnum.expired
  | string;

export {
  TransactionStatusEnum,
  TransactionStatus,
}