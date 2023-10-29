import { ICreatePermissionRepository } from "../i-create-permission-repository";
import { Permission } from "@/src/shared/application/entities/permission";



export class CreatePermissionRepositoryFake
  implements ICreatePermissionRepository.Implementation {
  private permission: Permission[] = [];

  async findUnique(props: ICreatePermissionRepository.FindUnique.Params):
    ICreatePermissionRepository.FindUnique.Response {
    const result = this.permission.filter(permission => permission.name === props.name)

    return result[0];
  }

  async create(props: ICreatePermissionRepository.Create.Params):
    ICreatePermissionRepository.Create.Response {
    this.permission.push({
      id: "",
      name: "",
      level: 0,
      description: "",
      createdAt: new Date(),
      updatedAt: null,
    })

    return this.permission[0];
  }

  async delete(props: ICreatePermissionRepository.Delete.Params):
    ICreatePermissionRepository.Delete.Response {
    const permission = this.permission[0];

    this.permission.shift()

    return permission;
  }

  async list(props: ICreatePermissionRepository.List.Params):
    ICreatePermissionRepository.List.Response {
    const permission = this.permission;

    return permission;
  }
}