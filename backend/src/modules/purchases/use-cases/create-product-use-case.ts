import { randomUUID } from "crypto";
import { inject, injectable } from "tsyringe";
import { ProductTypeEnum } from "@shared/application/entities/enums/i-product-type";
import { ICreateProductUseCase } from "@purchases/interfaces/i-create-product-use-case";
import { ICreateProductRepository } from "@purchases/repositories/i-create-product-repository";
import { PurchaseBusinessException } from "@purchases/infra/exceptions/business-exception";
import { ISubscriptionCustomerAccountGateway } from "@shared/infra/gateways/contracts/i-subscription-customer-accounts-gateway";



@injectable()
export class CreateProductUseCase implements
  ICreateProductUseCase.Implementation {
  constructor(
    @inject("CreateProductRepository")
    private createProductRepository: ICreateProductRepository.Implementation,
    @inject("SubscriptionCustomerAccountsGateway")
    private subscriptionCustomerAccountsGateway: ISubscriptionCustomerAccountGateway.Implementation,
  ) { }

  public async execute(props: ICreateProductUseCase.Params):
    ICreateProductUseCase.Response {

    const verifyProductAlreadyExists =
      await this.createProductRepository.findByName({ name: props.name });

    if (!!verifyProductAlreadyExists?.id) {
      throw new PurchaseBusinessException("Product already exists", 403);
    }

    const verifyProductAlreadyExistsInGateway =
      await this.subscriptionCustomerAccountsGateway.findById({
        productId: props.name
      });

    if (!!verifyProductAlreadyExistsInGateway.price) {
      throw new PurchaseBusinessException("Product already exists on the gateway", 403);
    }

    const productId = randomUUID();
    const productCreatedAt = new Date();

    const createProductRepositoryResponse =
      await this.createProductRepository.create({
        ...props,
        type: ProductTypeEnum.product,
        id: productId,
        createdAt: productCreatedAt,
      });

    return createProductRepositoryResponse;
  }
}