import { PrismaClient } from "@prisma/client";
import { ICustomerAuthorizationAccountRepository } from "../i-customer-authorization-account-repository";


const database = new PrismaClient();

export class CustomerAuthorizationAccountRepository
  implements ICustomerAuthorizationAccountRepository.Implementation {

  public async findById(props: ICustomerAuthorizationAccountRepository.FindById.Params):
    ICustomerAuthorizationAccountRepository.FindById.Response {

    const findByEmailResponse = await database.user.findFirst({
      where: {
        email: props.customerId
      },
    });

    return findByEmailResponse;
  };

  public async update(props: ICustomerAuthorizationAccountRepository.Update.Params):
    ICustomerAuthorizationAccountRepository.Update.Response {

    const updateCustomerAccountResponse = await database.user.update({
      where: {
        email: props.email
      },
      data: {
        status: props.status,
        permissions: {
          connect: props.permissions
        },
        roles: {
          connect: props.roles
        },
      },
      include: {
        permissions: false,
        roles: false,
      }
    });

    return updateCustomerAccountResponse;
  };

  public async findPermissions(params: ICustomerAuthorizationAccountRepository.FindPermissions.Params):
    ICustomerAuthorizationAccountRepository.FindPermissions.Response {

    const findPermissions = await database.permission.findMany({
      where: {
        level: params.level,
      }
    })

    return findPermissions;
  };

  public async findRoles(params: ICustomerAuthorizationAccountRepository.FindRoles.Params):
    ICustomerAuthorizationAccountRepository.FindRoles.Response {

    const findRole = await database.role.findMany({
      where: {
        level: params.level,
      }
    })

    return findRole;
  };
}