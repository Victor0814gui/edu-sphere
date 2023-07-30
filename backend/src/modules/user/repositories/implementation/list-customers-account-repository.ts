import { PrismaClient } from "@prisma/client";
import { IListCustomersRepository } from "../i-list-customers-repository";

const database = new PrismaClient();

export class ListCustomersRepository
  implements IListCustomersRepository.Implementation {

  async findMany(props: IListCustomersRepository.FindMany.Params):
    Promise<IListCustomersRepository.FindMany.Response | null> {

    const findUniqueUserResponse = await database.user.findMany({
      include: {
        permissions: {
          select: {
            name: true
          }
        }
      }
    });

    return findUniqueUserResponse;
  }
}