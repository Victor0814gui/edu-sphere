
import { PrismaClient } from "@prisma/client";
import { ICreateRoleRepository } from "../i-create-role-repository";


const database = new PrismaClient();

export class CreateRoleRepository
  implements ICreateRoleRepository.Implementation {

  async findUnique(props: ICreateRoleRepository.FindUnique.Params):
    Promise<ICreateRoleRepository.FindUnique.Response | null> {
    const findUniqueRoleResposne = await database.role.findFirst({
      where: {
        name: props.name,
      }
    })

    return findUniqueRoleResposne;
  }

  async create(props: ICreateRoleRepository.Create.Params):
    Promise<ICreateRoleRepository.Create.Response> {
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

  async delete(props: ICreateRoleRepository.Delete.Params):
    Promise<ICreateRoleRepository.Delete.Response> {
    const deleteRoleResposne = await database.role.delete({
      where: {
        name: props.name,
      }
    })

    return deleteRoleResposne;
  }

  async list(props: ICreateRoleRepository.List.Params):
    Promise<ICreateRoleRepository.List.Response | null> {
    const listRolesResposne = await database.role.findMany()

    return listRolesResposne;
  }
}