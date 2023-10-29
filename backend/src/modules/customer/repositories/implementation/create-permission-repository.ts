
import { PrismaClient } from "@prisma/client";
import { ICreatePermissionRepository } from "../i-create-permission-repository";
import crypto from "crypto";


const database = new PrismaClient();

export class CreatePermissionRepository
  implements ICreatePermissionRepository.Implementation {

  async findUnique(props: ICreatePermissionRepository.FindUnique.Params):
    Promise<ICreatePermissionRepository.FindUnique.Response | null> {
    const findUniquePermissionResposne = await database.permission.findFirst({
      where: {
        name: props.name,
      }
    })

    return findUniquePermissionResposne;
  }

  async create(props: ICreatePermissionRepository.Create.Params):
    Promise<ICreatePermissionRepository.Create.Response> {
    const createPermissionResposne = await database.permission.create({
      data: {
        id: props.id,
        level: props.level,
        description: props.description,
        createdAt: props.createdAt,
        updatedAt: null,
        name: props.name
      }
    })

    return createPermissionResposne;
  }

  async delete(props: ICreatePermissionRepository.Delete.Params):
    Promise<ICreatePermissionRepository.Delete.Response> {
    const deletePermissionResposne = await database.permission.delete({
      where: {
        name: props.name,
      }
    })

    return deletePermissionResposne;
  }

  async list(props: ICreatePermissionRepository.List.Params):
    Promise<ICreatePermissionRepository.List.Response | null> {
    const listRolesResposne = await database.permission.findMany()

    return listRolesResposne;
  }
}