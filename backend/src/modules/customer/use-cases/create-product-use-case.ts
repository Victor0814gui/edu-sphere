import { inject, injectable } from "tsyringe";
import { ICreateProductUseCase } from "../interfaces/i-create-product-use-case";
import { ICreateProductRepository } from "../repositories/i-create-product-repository";
import UserBusinessException from "../infra/exception/business-exception";



@injectable()
export class CreateProductUseCase implements
  ICreateProductUseCase.Implementation {
  constructor(
    @inject("CreateProductRepository")
    private createProductRepository: ICreateProductRepository.Implementation
  ) { }
  async execute(props: ICreateProductUseCase.Params):
    ICreateProductUseCase.Response {

    const verifyProductAlreayExists =
      await this.createProductRepository.findByName({ name: props.name });

    if (!!verifyProductAlreayExists?.id) {
      throw new UserBusinessException("Product alredy exists", 403);
    }

    const permissionsObject = props.permiissions.map((e: string) => ({ name: e }))

    const createProductRepositoryResponse =
      await this.createProductRepository.create({
        ...props,
        id: crypto.randomUUID(),
        createdAt: new Date(),
        updatedAt: null,
        permissions: permissionsObject
      });

    return createProductRepositoryResponse;
  }
}