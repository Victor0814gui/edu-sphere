import { PrismaClient } from "@prisma/client";
import { ICreateCustomerAccountRepository } from "../i-create-customer-account-repository";
import { VerificationCode } from "@/src/shared/application/entities/verification-code";

const database = new PrismaClient();

export class CreateCustomerAccountRepository
  implements ICreateCustomerAccountRepository.Implementation {

  public async code(props: ICreateCustomerAccountRepository.Code.Params):
    ICreateCustomerAccountRepository.Code.Response {
    const createVerificationCodeResponse = await database.verificationCode.create({
      data: props,
    });

    return createVerificationCodeResponse;
  };

  public async findUnique(props: ICreateCustomerAccountRepository.FindUnique.Params):
    ICreateCustomerAccountRepository.FindUnique.Response {

    const findUniqueCustomerResponse = await database.user.findFirst({
      where: {
        email: props.email
      }
    });

    return findUniqueCustomerResponse;
  }

  public async create(props: ICreateCustomerAccountRepository.Create.Params):
    ICreateCustomerAccountRepository.Create.Response {

    const createCustomerResponse = await database.user.create({
      data: props,
    });

    return createCustomerResponse;
  }

  public async update(props: ICreateCustomerAccountRepository.Update.Params):
    ICreateCustomerAccountRepository.Update.Response {

    const permissions = props.permissions.map((permission) => ({ name: permission }));
    const roles = props.roles.map((role) => ({ name: role }));

    let createCustomerResponse = await database.user.update({
      where: {
        id: props.id,
      },
      data: {
        roles: {
          connect: roles
        },
        permissions: {
          connect: permissions
        },
      },
      include: {
        permissions: {
          select: {
            name: true,
          }
        },
        roles: {
          select: {
            name: true,
          }
        }
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