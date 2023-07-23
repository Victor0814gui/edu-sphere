import { PrismaClient } from "@prisma/client";
import { ICreateStudentAccountRepository } from "../i-create-student-account-repository";



export class CreateStudentAccountRepository
  implements ICreateStudentAccountRepository.Implementation {
  constructor(
    private database: PrismaClient
  ) { }


  async findPermissions(props: ICreateStudentAccountRepository.FindPermissions.Params):
    Promise<ICreateStudentAccountRepository.FindPermissions.Response | null> {

    const findUniqueStudentResponse = await this.database.permission.findMany();
    return findUniqueStudentResponse;
  }

  async findUniqueRole(props: ICreateStudentAccountRepository.FindUniqueRole.Params):
    Promise<ICreateStudentAccountRepository.FindUniqueRole.Response | null> {

    const findUniqueStudentResponse = await this.database.role.findFirst({
      where: {
        level: props.level
      }
    });

    return findUniqueStudentResponse;
  }

  async findUnique(props: ICreateStudentAccountRepository.FindUnique.Params):
    Promise<ICreateStudentAccountRepository.FindUnique.Response | null> {

    const findUniqueStudentResponse = await this.database.user.findFirst({
      where: {
        id: props.id
      }
    });

    return findUniqueStudentResponse;
  }

  async create(props: ICreateStudentAccountRepository.Create.Params):
    Promise<ICreateStudentAccountRepository.Create.Response> {


    const createStudentResponse = await this.database.user.create({
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

    return createStudentResponse;
  }
}