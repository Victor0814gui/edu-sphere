import { PrismaClient } from "@prisma/client";
import { ICreateUserAccountRepository } from "../i-create-user-repository";

const database = new PrismaClient();

export class CreateUserAccountRepository
  implements ICreateUserAccountRepository.Implementation {

  async findPermissions(props: ICreateUserAccountRepository.FindPermissions.Params):
    Promise<ICreateUserAccountRepository.FindPermissions.Response | null> {

    const findUniqueUserResponse = await database.permission.findMany();
    return findUniqueUserResponse;
  }

  async findUniqueRole(props: ICreateUserAccountRepository.FindUniqueRole.Params):
    Promise<ICreateUserAccountRepository.FindUniqueRole.Response | null> {

    const findUniqueUserResponse = await database.role.findFirst({
      where: {
        name: props.name,
      },
      select: {
        id: true,
        name: true,
        permissions: {
          select: {
            name: true,
          }
        }
      }
    });

    return findUniqueUserResponse;
  }

  async findUnique(props: ICreateUserAccountRepository.FindUnique.Params):
    Promise<ICreateUserAccountRepository.FindUnique.Response | null> {

    const findUniqueUserResponse = await database.user.findFirst({
      where: {
        email: props.email
      }
    });

    return findUniqueUserResponse;
  }

  async create(props: ICreateUserAccountRepository.Create.Params):
    Promise<ICreateUserAccountRepository.Create.Response> {

    const createUserResponse = await database.user.create({
      data: {
        roleName: props.role,
        id: props.id,
        password: props.password,
        name: props.name,
        avatarUrl: props.avatarUrl,
        email: props.email,
        createdAt: props.createdAt,
      },
    });

    return createUserResponse;
  }

  async update(props: ICreateUserAccountRepository.Update.Params):
    Promise<ICreateUserAccountRepository.Update.Response> {

    const createUserResponse = await database.user.update({
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

    return createUserResponse!;
  }

  async delete(props: ICreateUserAccountRepository.Delete.Params):
    Promise<ICreateUserAccountRepository.Delete.Response> {

    await database.user.delete({
      where: {
        id: props.id,
      },
    });

    return {};
  }
}