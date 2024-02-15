import { inject, injectable } from "tsyringe";
import { ICreateProductRepository } from "../repositories/i-create-product-repository";
import { PurchaseBusinessException } from "../infra/exceptions/business-exception";
import { ISessionPurchaseProductGateway } from "../infra/gateways/contracts/i-sessions-purchase-product-gateway";
import { convertTimestampForDate } from "../infra/services/convert-timestamp-for-date";
import { ISyncProductWithGatewayUseCase } from "../interfaces/i-sync-product-with-gateway-use-case";


@injectable()
export class SyncProductWithGatewayUseCase
  implements ISyncProductWithGatewayUseCase.Implementation {
  constructor(
    @inject("CreateProductRepository")
    private createProductRepository: ICreateProductRepository.Implementation,
    @inject("SessionPurchaseProductGateway")
    private sessionPurchaseProductGateway: ISessionPurchaseProductGateway.Implementation,
  ) { }

  public async execute(params: ISyncProductWithGatewayUseCase.Params):
    ISyncProductWithGatewayUseCase.Response {


    const subscriptionCustomerAccountsGatewayResponse =
      await this.sessionPurchaseProductGateway.findProduct({
        priceId: params.priceId,
      })

    if (!subscriptionCustomerAccountsGatewayResponse?.id) {
      throw new PurchaseBusinessException("Product does not exists", 403);
    }

    const product = subscriptionCustomerAccountsGatewayResponse!;
    const createdAt = convertTimestampForDate(product.createdAt!)

    const createProductRepositoryResponse =
      await this.createProductRepository.create({
        productId: product.productId!,
        priceId: product.priceId!,
        name: product.name!,
        status: product.status!,
        amount: product.amount!,
        description: product.description!,
        createdAt: createdAt!,
        type: product.type!,
        id: product.id!,
        thumbnailUrl: "https://avatars.githubusercontent.com/u/92493696?v=4"
      });

    return createProductRepositoryResponse;
  }
}