
import { inject, injectable } from "tsyringe";
import { IPurchaseProductToCustomerUseCase } from "../interfaces/i-purchase-product-to-customer-use-case";
import { IPurchaseProductToCustomerRepository } from "../repositories/i-purchase-product-to-customer-repository";
import CustomerBusinessException from "../infra/exception/business-exception";
import { ISessionPurchaseProductGatway } from "../infra/gateways/contracts/i-sessions-purchase-product-gatway";



@injectable()
export class PurchaseProductToCustomerUseCase
  implements IPurchaseProductToCustomerUseCase.Implementation {
  constructor(
    @inject("PurchaseProductToCustomerRepository")
    private purchaseProductToCustomerRepository: IPurchaseProductToCustomerRepository.Implementation,
    @inject("SessionPurchaseProductGatway")
    private sessionPurchaseProductGatway: ISessionPurchaseProductGatway.Implementation
  ) { }
  async execute(props: IPurchaseProductToCustomerUseCase.Params):
    IPurchaseProductToCustomerUseCase.Response {

    const verifyCustomerAlredyExists =
      await this.purchaseProductToCustomerRepository.findCustomer({
        customerId: props.customerId
      });

    if (!verifyCustomerAlredyExists?.id) {
      throw new CustomerBusinessException("Customer does not exists", 404);
    }

    const verifyProductAlredyExists =
      await this.purchaseProductToCustomerRepository.findProduct({
        productId: props.productId,
      });

    if (!verifyProductAlredyExists?.id) {
      throw new CustomerBusinessException("Product does not exists", 404);
    }

    const purchaseProductToCustomerResponse =
      await this.purchaseProductToCustomerRepository.findCustomer({
        customerId: props.customerId
      });

    // const sessionPurchaseProductGatwayResponse =
    //   await this.sessionPurchaseProductGatway.execute({
    //     successUrl: "",
    //     customerId: "",
    //     productId: "",
    //     productQuantity: 0,
    //     cancelUrl: ""
    //   });

    // if (!sessionPurchaseProductGatwayResponse?.customerEmail) {
    //   throw new CustomerBusinessException("Error processing your payment", 500);
    // }

    return purchaseProductToCustomerResponse;
  };
}