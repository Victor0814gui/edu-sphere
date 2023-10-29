
import { PrismaClient } from "@prisma/client";
import { IAuthenticationCustomerRepository } from "../i-authentication-customer-repository";

const database = new PrismaClient();


export class AuthenticationCustomerRepository
  implements IAuthenticationCustomerRepository.Implementation {
  async findUnique(props: IAuthenticationCustomerRepository.FindUnique.Params):
    IAuthenticationCustomerRepository.FindUnique.Response {

    const authenticationCustomerResponse = database.user.findFirst({
      where: {
        email: props.email
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
    })

    return authenticationCustomerResponse;
  }
}