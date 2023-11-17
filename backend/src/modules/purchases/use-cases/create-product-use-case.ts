import { inject, injectable } from "tsyringe";
import { ICreateProductUseCase } from "../interfaces/i-create-product-use-case";
import { ICreateProductRepository } from "../repositories/i-create-product-repository";
import { CustomerBusinessException } from "../../customer/infra/exceptions/business-exception";
import { ISubscriptionCustomerAccountGateway } from "../../customer/infra/gateways/contracts/i-subscription-customer-accounts-gateway";
import { ICreateUUIDTokenService } from "../../customer/infra/services/contracts/i-create-uuid-token-service";
import { ICreateNewDateService } from "../../customer/infra/services/contracts/i-create-new-date-service";
import { ProductType } from "@/src/shared/application/entities/product";
import { IConvertStringInDate } from "../infra/services/interfaces/i-convert-string-in-date";
import { ProductTypeEnum } from "@/src/shared/application/entities/enums/i-product-type";



@injectable()
export class CreateProductUseCase implements
  ICreateProductUseCase.Implementation {
  constructor(
    @inject("CreateProductRepository")
    private createProductRepository: ICreateProductRepository.Implementation,
    @inject("SubscriptionCustomerAccountsGateway")
    private subscriptionCustomerAccountsGateway: ISubscriptionCustomerAccountGateway.Implementation,
    @inject("CreateUUIDTokenService")
    private createUUIDTokenService: ICreateUUIDTokenService.Implementation,
    @inject("CreateNewDateService")
    private createNewDateService: ICreateNewDateService.Implementation,
  ) { }

  public async execute(props: ICreateProductUseCase.Params):
    ICreateProductUseCase.Response {

    const verifyProductAlreadyExists =
      await this.createProductRepository.findByName({ name: props.name });

    if (!!verifyProductAlreadyExists?.id) {
      throw new CustomerBusinessException("Product already exists", 403);
    }

    const verifyProductAlreadyExistsInGateway =
      await this.subscriptionCustomerAccountsGateway.findById({
        productId: props.name
      });

    if (!!verifyProductAlreadyExistsInGateway.price) {
      throw new CustomerBusinessException("Product already exists on the gateway", 403);
    }

    const productId = this.createUUIDTokenService.create()
    const productCreatedAt = this.createNewDateService.create()

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