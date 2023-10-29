
import { PrismaClient } from "@prisma/client";
import { ICreateRoleRepository } from "../i-create-role-repository";


const database = new PrismaClient();

export class CreateRoleRepository
  implements ICreateRoleRepository.Implementation {

  public async findUnique(props: ICreateRoleRepository.FindUnique.Params):
    ICreateRoleRepository.FindUnique.Response {
    const findUniqueRoleResposne = await database.role.findFirst({
      where: {
        name: props.name,
      }
    })

    return findUniqueRoleResposne;
  }

  async create(props: ICreateRoleRepository.Create.Params):
    ICreateRoleRepository.Create.Response {
    const createRoleResposne = await database.role.create({
      data: {
        id: props.id,
        level: props.level,
        description: props.description,
        createdAt: props.createdAt,
        updatedAt: null,
        name: props.name
      }
    })

    return createRoleResposne;
  }

  public async delete(props: ICreateRoleRepository.Delete.Params):
    ICreateRoleRepository.Delete.Response {
    const deleteRoleResposne = await database.role.delete({
      where: {
        name: props.name,
      }
    })

    return deleteRoleResposne;
  }

  public async list(props: ICreateRoleRepository.List.Params):
    ICreateRoleRepository.List.Response {
    const listRolesResponse = await database.role.findMany({
      include: {
        permissions: {
          select: {
            name: true,
          }
        }
      }
    })

    return listRolesResponse;
  }
}