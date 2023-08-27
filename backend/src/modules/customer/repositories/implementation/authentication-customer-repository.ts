
import { PrismaClient } from "@prisma/client";
import { IAuthenticationCustomerRepository } from "../i-authentication-customer-repository";

const database = new PrismaClient();


export class AuthenticationCustomerRepository
  implements IAuthenticationCustomerRepository.Implementation {
  async findUnique(props: IAuthenticationCustomerRepository.FindUnique.Params):
    Promise<IAuthenticationCustomerRepository.FindUnique.Response | null> {

    const authenticationCustomeResponse = database.user.findFirst({
      where: {
        email: props.email
      },
      include: {
        permissions: {
          select: {
            name: true,
          }
        }
      }
    })

    return authenticationCustomeResponse;
  }
}