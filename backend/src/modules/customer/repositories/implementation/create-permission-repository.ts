
import { PrismaClient } from "@prisma/client";
import { ICreatePermissionRepository } from "../i-create-permission-repository";
import crypto from "crypto";


const database = new PrismaClient();

export class CreatePermissionRepository
  implements ICreatePermissionRepository.Implementation {

  async findUnique(props: ICreatePermissionRepository.FindUnique.Params):
    ICreatePermissionRepository.FindUnique.Response {
    const findUniquePermissionResponse = await database.permission.findFirst({
      where: {
        name: props.name,
      }
    })

    return findUniquePermissionResponse;
  }

  async create(props: ICreatePermissionRepository.Create.Params):
    ICreatePermissionRepository.Create.Response {
    const createPermissionResponse = await database.permission.create({
      data: {
        id: props.id,
        level: props.level,
        description: props.description,
        createdAt: props.createdAt,
        updatedAt: null,
        name: props.name
      }
    })

    return createPermissionResponse;
  }

  async delete(props: ICreatePermissionRepository.Delete.Params):
    ICreatePermissionRepository.Delete.Response {
    const deletePermissionResponse = await database.permission.delete({
      where: {
        name: props.name,
      }
    })

    return deletePermissionResponse;
  }

  async list(props: ICreatePermissionRepository.List.Params):
    ICreatePermissionRepository.List.Response {
    const listRolesResponse = await database.permission.findMany()

    return listRolesResponse;
  }
}