import { inject, injectable } from "tsyringe";
import { ICreateProductUseCase } from "../interfaces/i-create-product-use-case";
import { ICreateProductRepository } from "../repositories/i-create-product-repository";
import { CustomerBusinessException } from "../infra/exception/business-exception";
import { ISubscriptionCustomerAccountGateway } from "../infra/gateways/contracts/i-subscription-customer-accounts-gateway";
import { ICreateUUIDTokenService } from "../infra/services/contracts/i-create-uuid-token-service";
import { ICreateNewDateService } from "../infra/services/contracts/i-create-new-date-service";



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

    const verifyProductAlreayExists =
      await this.createProductRepository.findByName({ name: props.name });

    if (!!verifyProductAlreayExists?.id) {
      throw new CustomerBusinessException("Product alredy exists", 403);
    }

    const verifyProductAlreadyExists =
      await this.subscriptionCustomerAccountsGateway.findById({
        productId: props.name
      })

    const permissionsObject = props.permissions.map((e: string) => ({ name: e }))

    if (!!verifyProductAlreadyExists.price) {
      throw new CustomerBusinessException("Poduct already exists on the gateway", 403);
    }

    const productId = this.createUUIDTokenService.create(null)
    const productCreatedAt = this.createNewDateService.create(null)

    const createProductRepositoryResponse =
      await this.createProductRepository.create({
        ...props,
        id: productId,
        createdAt: productCreatedAt,
        updatedAt: null,
        permissions: permissionsObject
      });

    return createProductRepositoryResponse;
  }
}