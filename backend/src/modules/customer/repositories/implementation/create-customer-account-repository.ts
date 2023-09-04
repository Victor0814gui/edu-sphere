import { PrismaClient } from "@prisma/client";
import { ICreateCustomerAccountRepository } from "../i-create-customer-account-repository";

const database = new PrismaClient();

export class CreateCustomerAccountRepository
  implements ICreateCustomerAccountRepository.Implementation {

  async findUnique(props: ICreateCustomerAccountRepository.FindUnique.Params):
    ICreateCustomerAccountRepository.FindUnique.Response {

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
    ICreateCustomerAccountRepository.Update.Response {

    const permissions = props.permissions.map((permission) => ({ name: permission }));

    let createCustomerResponse = await database.user.update({
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
          connect: [...permissions]
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

    const permissionsResult = createCustomerResponse.permissions
      .map((permission) => permission.name);

    return {
      ...createCustomerResponse,
      permissions: permissionsResult
    };
  }
}