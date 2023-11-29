
import { PrismaClient } from "@prisma/client";
import { ICreateSubscriptionRepository } from "../i-create-subscription-repository";

const database = new PrismaClient();

export class CreateSubscriptionRepository
  implements ICreateSubscriptionRepository.Implementation {

  public async findByName(props: ICreateSubscriptionRepository.FindByName.Params):
    ICreateSubscriptionRepository.FindByName.Response {

    const findUniqueSubscriptionResponse = await database.product.findFirst({
      where: {
        name: props.name,
      },
    })

    return findUniqueSubscriptionResponse;
  }

  public async create(props: ICreateSubscriptionRepository.Create.Params):
    ICreateSubscriptionRepository.Create.Response {

    const createSubscriptionResponse = await database.product.create({
      data: props
    })

    return createSubscriptionResponse;
  }

}