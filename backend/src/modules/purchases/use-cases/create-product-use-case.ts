import { randomUUID } from "crypto";
import { inject, injectable } from "tsyringe";
import { ProductTypeEnum } from "@shared/application/entities/enums/i-product-type";
import { ICreateProductUseCase } from "@purchases/interfaces/i-create-product-use-case";
import { ICreateProductRepository } from "@purchases/repositories/i-create-product-repository";
import { PurchaseBusinessException } from "@purchases/infra/exceptions/business-exception";
import { ISessionPurchaseProductGateway } from "../infra/gateways/contracts/i-sessions-purchase-product-gateway";



@injectable()
export class CreateProductUseCase implements
  ICreateProductUseCase.Implementation {
  constructor(
    @inject("CreateProductRepository")
    private createProductRepository: ICreateProductRepository.Implementation,
    @inject("SessionPurchaseProductGateway")
    private sessionPurchaseProductGateway: ISessionPurchaseProductGateway.Implementation,
  ) { }

  public async execute(params: ICreateProductUseCase.Params):
    ICreateProductUseCase.Response {

    const verifyProductAlreadyExists =
      await this.createProductRepository.findByName({ name: params.name });

    if (!!verifyProductAlreadyExists?.id) {
      throw new PurchaseBusinessException("Product already exists", 403);
    }

    const verifyProductAlreadyExistsInGateway =
      await this.sessionPurchaseProductGateway.create(params);

    const productId = randomUUID();
    const productCreatedAt = new Date();

    const createProductRepositoryResponse =
      await this.createProductRepository.create({
        ...params,
        type: ProductTypeEnum.product,
        id: productId,
        createdAt: productCreatedAt,
        priceId: verifyProductAlreadyExistsInGateway.priceId,
        productId: verifyProductAlreadyExistsInGateway.productId,
      });

    return createProductRepositoryResponse;
  }
}