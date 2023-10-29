import { container } from "tsyringe";
import { ICreateProductRepository } from "../../repositories/i-create-product-repository";
import { CreateProductRepository } from "../../repositories/implementation/create-product-repository";

container.registerSingleton<ICreateProductRepository.Implementation>(
  "CreateProductRepository",
  CreateProductRepository,
);
