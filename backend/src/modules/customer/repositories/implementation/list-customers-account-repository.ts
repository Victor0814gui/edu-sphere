import { PrismaClient } from "@prisma/client";
import { IListCustomersRepository } from "../i-list-customers-repository";

const database = new PrismaClient();

export class ListCustomersRepository
  implements IListCustomersRepository.Implementation {

  async findMany(props: IListCustomersRepository.FindMany.Params):
    IListCustomersRepository.FindMany.Response {

    const findUniqueUserResponse = await database.user.findMany({
      include: {
        codes: {
          select:{
            id: true,
          }
        },
        permissions: {
          select: {
            name: true
          }
        },
        roles: {
          select: {
            name: true
          }
        },
      }
    });

    return findUniqueUserResponse;
  }
}