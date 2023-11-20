import { Product } from "@/src/shared/application/entities/product"
import { IListProductsUseCase } from "../interfaces/i-list-products-use-cases"
import { IListProductsRepository } from "../repositories/i-list-products-repository"
import { ListProductsRepository } from "../repositories/implementation/list-products-repository"
import { ListProductsUseCase } from "./list-products-use-cases"



let products: Product[];
let listProductsUseCase: IListProductsUseCase.Implementation
let listProductsRepository: IListProductsRepository.Implementation

describe("List all products", () => {
  it("It should be possible to list all products", async () => {

    listProductsRepository = new ListProductsRepository();
    listProductsUseCase = new ListProductsUseCase(
      listProductsRepository,
    );

    expect(listProductsUseCase)
      .toEqual(products)

  })
})