import { inject, injectable } from "tsyringe";
import { IPurchaseProductToCustomerUseCase } from "../interfaces/i-purchase-product-to-customer-use-case";
import { IPurchaseProductToCustomerRepository } from "../repositories/i-purchase-product-to-customer-repository";
import { CustomerBusinessException } from "../infra/exceptions/business-exception";
import { ISessionPurchaseProductGateway } from "../infra/gateways/contracts/i-sessions-purchase-product-gateway";


@injectable()
export class PurchaseProductToCustomerUseCase
  implements IPurchaseProductToCustomerUseCase.Implementation {
  constructor(
    @inject("PurchaseProductToCustomerRepository")
    private purchaseProductToCustomerRepository: IPurchaseProductToCustomerRepository.Implementation,
    @inject("SessionPurchaseProductGateway")
    private sessionPurchaseProductGateway: ISessionPurchaseProductGateway.Implementation
  ) { }
  public async execute(props: IPurchaseProductToCustomerUseCase.Params):
    IPurchaseProductToCustomerUseCase.Response {

    const verifyCustomerAlreadyExists =
      await this.purchaseProductToCustomerRepository.findCustomer({
        customerId: props.customerId
      });

    if (!verifyCustomerAlreadyExists?.id) {
      throw new CustomerBusinessException("Customer does not exists", 404);
    }

    const verifyProductAlreadyExists =
      await this.purchaseProductToCustomerRepository.findProduct({
        productId: props.productId,
      });

    if (!verifyProductAlreadyExists?.id) {
      throw new CustomerBusinessException("Product does not exists", 404);
    }

    const purchaseProductToCustomerResponse =
      await this.purchaseProductToCustomerRepository.findCustomer({
        customerId: props.customerId
      });

    // const sessionPurchaseProductGatewayResponse =
    //   await this.sessionPurchaseProductGateway.execute({
    //     successUrl: "",
    //     customerId: "",
    //     productId: "",
    //     productQuantity: 0,
    //     cancelUrl: ""
    //   });

    // if (!sessionPurchaseProductGateway?.customerEmail) {
    //   throw new CustomerBusinessException("Error processing your payment", 500);
    // }

    return purchaseProductToCustomerResponse;
  };
}