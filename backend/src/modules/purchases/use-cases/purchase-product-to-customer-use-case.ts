import { randomUUID } from "crypto";
import { inject, injectable } from "tsyringe";
import { PurchaseBusinessException } from "@purchases/infra/exceptions/business-exception";
import { ISessionPurchaseProductGateway } from "@purchases/infra/gateways/contracts/i-sessions-purchase-product-gateway";
import { IPurchaseProductToCustomerUseCase } from "@purchases/interfaces/i-purchase-product-to-customer-use-case";
import { IPurchaseProductToCustomerRepository } from "@purchases/repositories/i-purchase-product-to-customer-repository";
import { TransactionStatusEnum } from "@/src/shared/application/entities/enums/i-transaction-status";


@injectable()
export class PurchaseProductToCustomerUseCase
  implements IPurchaseProductToCustomerUseCase.Implementation {
  constructor(
    @inject("PurchaseProductToCustomerRepository")
    private purchaseProductToCustomerRepository: IPurchaseProductToCustomerRepository.Implementation,
    @inject("SessionPurchaseProductGateway")
    private sessionPurchaseProductGateway: ISessionPurchaseProductGateway.Implementation,
  ) { }
  public async execute(params: IPurchaseProductToCustomerUseCase.Params):
    IPurchaseProductToCustomerUseCase.Response {

    const verifyCustomerAlreadyExists =
      await this.purchaseProductToCustomerRepository.findCustomer({
        customerId: params.customerId
      });

    if (!verifyCustomerAlreadyExists?.id) {
      throw new PurchaseBusinessException("Customer does not exists", 404);
    }

    const verifyProductAlreadyExists =
      await this.purchaseProductToCustomerRepository.findProduct({
        productId: params.productId,
      });

    if (!verifyProductAlreadyExists?.id) {
      throw new PurchaseBusinessException("Product does not exists", 404);
    }

    const sessionPurchaseProductGatewayResponse =
      await this.sessionPurchaseProductGateway.purchase({
        priceId: verifyProductAlreadyExists.priceId,
      });

    const purchaseProductEmitTransactionResponse =
      await this.purchaseProductToCustomerRepository.purchase({
        customerId: params.customerId,
        productId: params.productId,
      });

    const transactionPaymentIntent = sessionPurchaseProductGatewayResponse?.transactionId;
    const transactionId = sessionPurchaseProductGatewayResponse.id

    if (!transactionId && !transactionPaymentIntent) {
      throw new PurchaseBusinessException("Error processing your payment", 500);
    }

    const transactionDate = new Date();

    const purchaseProductToCustomerRepositoryResponse =
      await this.purchaseProductToCustomerRepository.transaction({
        id: transactionId!,
        paymentIntent: transactionPaymentIntent!,
        currency: "brl",
        userId: verifyCustomerAlreadyExists.id,
        amount: purchaseProductEmitTransactionResponse.amount,
        status: TransactionStatusEnum.active,
        createdAt: transactionDate,
      });

    console.log(purchaseProductToCustomerRepositoryResponse);

    return purchaseProductToCustomerRepositoryResponse;
  };
}