
import { PrismaClient } from "@prisma/client";
import { IUpdateRoleRepository } from "../i-update-role-repository";


const database = new PrismaClient();

export class UpdateRoleRepository
  implements IUpdateRoleRepository.Implementation {

  async findUnique(props: IUpdateRoleRepository.FindUnique.Params):
    Promise<IUpdateRoleRepository.FindUnique.Response | null> {
    const findUniqueRoleResposne = await database.role.findUnique({
      where: {
        name: props.name,
      }
    })

    return findUniqueRoleResposne;
  }

  async update(props: IUpdateRoleRepository.Update.Params):
    Promise<IUpdateRoleRepository.Update.Response> {
    const listRolesResposne = await database.role.update({
      where: {
        name: props.name,
      },
      data: {
        ...props,
        permissions: {
          set: [],
          connect: props.permissions,
        }
      },
      include: {
        permissions: {
          select: {
            name: true,
          }
        },
      }
    })

    return listRolesResposne;
  }
}