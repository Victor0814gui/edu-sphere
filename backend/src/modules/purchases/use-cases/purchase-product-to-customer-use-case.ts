import { inject, injectable } from "tsyringe";
import { IPurchaseProductToCustomerUseCase } from "../interfaces/i-purchase-product-to-customer-use-case";
import { IPurchaseProductToCustomerRepository } from "../repositories/i-purchase-product-to-customer-repository";
import { PurchaseBusinessException } from "../infra/exceptions/business-exception";
import { ISessionPurchaseProductGateway } from "@customer/infra/gateways/contracts/i-sessions-purchase-product-gateway";


@injectable()
export class PurchaseProductToCustomerUseCase
  implements IPurchaseProductToCustomerUseCase.Implementation {
  constructor(
    @inject("PurchaseProductToCustomerRepository")
    private purchaseProductToCustomerRepository: IPurchaseProductToCustomerRepository.Implementation,
    @inject("SessionPurchaseProductGateway")
    private sessionPurchaseProductGateway: ISessionPurchaseProductGateway.Implementation
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

    const purchaseProductToCustomerResponse =
      await this.purchaseProductToCustomerRepository.purchase({
        customerId: params.customerId,
        productId: params.productId,
      });

    const sessionPurchaseProductGatewayResponse =
      await this.sessionPurchaseProductGateway.execute({
        customerId: params.customerId,
        priceId: params.productId,
      });

    if (!sessionPurchaseProductGatewayResponse?.subscriptionId) {
      throw new PurchaseBusinessException("Error processing your payment", 500);
    }

    return purchaseProductToCustomerResponse;
  };
}