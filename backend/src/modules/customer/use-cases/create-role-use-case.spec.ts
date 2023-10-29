import { randomUUID } from "crypto";
import { ICreateUUIDTokenService } from "../infra/services/contracts/i-create-uuid-token-service";
import { ICreateNewDateService } from "../infra/services/contracts/i-create-new-date-service";
import { CreateUUIDTokenService } from "../infra/services/create-uuid-token-service";
import { CreateNewDateService } from "../infra/services/create-new-date-service";
import { Role } from "@/src/shared/application/entities/role";
import { CreateRoleUseCase } from "./create-role-use-case";
import { ICreateRoleRepository } from "../repositories/i-create-role-repository";
import { ICreateRoleUseCase } from "../interfaces/i-create-role-use-case";
import { CreateRoleRepositoryFake } from "../repositories/fakes/create-role-repository-fake";

let createRoleRepositoryFake: ICreateRoleRepository.Implementation;
let createNewDateService: ICreateNewDateService.Implementation;
let createUUIDTokenService: ICreateUUIDTokenService.Implementation;
let createRoleUseCase: ICreateRoleUseCase.Implementation;
let role: Role;

describe("Create new Role", () => {
  it("It should not be possible to create a Role", async () => {
    createRoleRepositoryFake = new CreateRoleRepositoryFake();
    createNewDateService = new CreateNewDateService();
    createUUIDTokenService = new CreateUUIDTokenService();
    createRoleUseCase = new CreateRoleUseCase(
      createRoleRepositoryFake,
      createUUIDTokenService,
      createNewDateService,
    )

    role = {
      createdAt: new Date(),
      description: "Role global quer permite ao cliente acessar toda a aplicação mas sem poder para editar",
      id: randomUUID(),
      level: 0,
      name: "global*list",
      updatedAt: null,
    }

    const createRoleUseCaseResponse =
      await createRoleUseCase.execute(role)


    expect(createRoleUseCaseResponse)
      .toEqual(role)

  })
})