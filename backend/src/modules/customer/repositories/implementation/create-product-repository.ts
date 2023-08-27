
import { PrismaClient } from "@prisma/client";
import { ICreateProductRepository } from "../i-create-product-repository";


const database = new PrismaClient();

export class CreateProductRepository
  implements ICreateProductRepository.Implementation {

  public async findByName(props: ICreateProductRepository.FindByName.Params):
    ICreateProductRepository.FindByName.Response {

    const findUniqueProductResposne = await database.product.findFirst({
      where: {
        name: props.name,
      }
    })

    return findUniqueProductResposne;
  }

  public async create(props: ICreateProductRepository.Create.Params):
    ICreateProductRepository.Create.Response {

    const createProductResposne = await database.product.create({
      data: {
        ...props,
        permissions: {
          connect: props.permissions
        },
      },
      include: {
        permissions: {
          select: {
            name: true,
          }
        }
      }
    })

    return createProductResposne;
  }

}