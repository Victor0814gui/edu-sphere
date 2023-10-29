import { ICreateRoleRepository } from "../i-create-role-repository";
import { Role } from "@/src/shared/application/entities/role";



export class CreateRoleRepositoryFake
  implements ICreateRoleRepository.Implementation {
  private role: Role[] = [];

  async findUnique(props: ICreateRoleRepository.FindUnique.Params):
    ICreateRoleRepository.FindUnique.Response {
    const result = this.role.filter(role => role.name === props.name)

    return result[0];
  }

  async create(props: ICreateRoleRepository.Create.Params):
    ICreateRoleRepository.Create.Response {
    this.role.push({
      id: "",
      name: "",
      level: 0,
      description: "",
      createdAt: new Date(),
      updatedAt: null,
    })

    return this.role[0];
  }

  async delete(props: ICreateRoleRepository.Delete.Params):
    ICreateRoleRepository.Delete.Response {
    const role = this.role[0];

    this.role.shift()

    return role;
  }

  async list(props: ICreateRoleRepository.List.Params):
    ICreateRoleRepository.List.Response {
    const role = this.role;

    return role;
  }
}