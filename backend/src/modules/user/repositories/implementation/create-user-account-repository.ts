import { PrismaClient } from "@prisma/client";
import { ICreateUserAccountRepository } from "../i-create-user-account-repository";



export class CreateUserAccountRepository
  implements ICreateUserAccountRepository.Implementation {
  constructor(
    private database: PrismaClient
  ) { }


  async findPermissions(props: ICreateUserAccountRepository.FindPermissions.Params):
    Promise<ICreateUserAccountRepository.FindPermissions.Response | null> {

    const findUniqueUserResponse = await this.database.permission.findMany();
    return findUniqueUserResponse;
  }

  async findUniqueRole(props: ICreateUserAccountRepository.FindUniqueRole.Params):
    Promise<ICreateUserAccountRepository.FindUniqueRole.Response | null> {

    const findUniqueUserResponse = await this.database.role.findFirst({
      where: {
        level: props.level
      }
    });

    return findUniqueUserResponse;
  }

  async findUnique(props: ICreateUserAccountRepository.FindUnique.Params):
    Promise<ICreateUserAccountRepository.FindUnique.Response | null> {

    const findUniqueUserResponse = await this.database.user.findFirst({
      where: {
        id: props.id
      }
    });

    return findUniqueUserResponse;
  }

  async create(props: ICreateUserAccountRepository.Create.Params):
    Promise<ICreateUserAccountRepository.Create.Response> {


    const createUserResponse = await this.database.user.create({
      data: {
        id: crypto.randomUUID(),
        password: props.password,
        name: props.name,
        avatarUrl: props.avatarUrl,
        email: props.email,
        createtAt: new Date(),
        permissions: {
          connect: [
            {
              level: props.level
            }
          ]
        }
      }
    });

    return createUserResponse;
  }
}