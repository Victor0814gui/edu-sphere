import { PrismaClient } from "@prisma/client";
import { ICreateCustomerAccountRepository } from "../i-create-customer-repository";

const database = new PrismaClient();

export class CreateCustomerAccountRepository
  implements ICreateCustomerAccountRepository.Implementation {

  async findUnique(props: ICreateCustomerAccountRepository.FindUnique.Params):
    Promise<ICreateCustomerAccountRepository.FindUnique.Response | null> {

    const findUniqueCustomerResponse = await database.user.findFirst({
      where: {
        email: props.email
      }
    });

    return findUniqueCustomerResponse;
  }

  async create(props: ICreateCustomerAccountRepository.Create.Params):
    ICreateCustomerAccountRepository.Create.Response {

    const createCustomerResponse = await database.user.create({
      data: {
        status: props.status,
        subscriptionId: props.subscriptionId,
        roleName: props.role,
        id: props.id,
        password: props.password,
        name: props.name,
        avatarUrl: props.avatarUrl,
        email: props.email,
        createdAt: props.createdAt,
      },
    });

    return createCustomerResponse;
  }

  async update(props: ICreateCustomerAccountRepository.Update.Params):
    Promise<ICreateCustomerAccountRepository.Update.Response> {

    const createCustomerResponse = await database.user.update({
      where: {
        id: props.id,
      },
      data: {
        role: {
          connect: {
            name: props.role,
          }
        },
        permissions: {
          connect: [...props.permissions]
        },
      },
      include: {
        permissions: {
          select: {
            name: true,
          }
        },
      }
    });

    return createCustomerResponse!;
  }
}