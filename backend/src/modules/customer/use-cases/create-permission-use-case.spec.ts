import { randomUUID } from "crypto";
import { ICreateUUIDTokenService } from "../infra/services/contracts/i-create-uuid-token-service";
import { ICreateNewDateService } from "../infra/services/contracts/i-create-new-date-service";
import { CreateUUIDTokenService } from "../infra/services/create-uuid-token-service";
import { ICreatePermissionRepository } from "../repositories/i-create-permission-repository";
import { ICreatePermissionUseCase } from "../interfaces/i-create-permission-use-case";
import { CreatePermissionUseCase } from "./create-permission-use-case";
import { CreateNewDateService } from "../infra/services/create-new-date-service";
import { Permission } from "@/src/shared/application/entities/permission";
import { CreatePermissionRepositoryFake } from "../repositories/fakes/create-permission-repository-fake";

let createPermissionRepository: ICreatePermissionRepository.Implementation;
let createNewDateService: ICreateNewDateService.Implementation;
let createUUIDTokenService: ICreateUUIDTokenService.Implementation;
let createPermissionUseCase: ICreatePermissionUseCase.Implementation;
let permission: Permission;

describe("Create new Permission", () => {
  it("It should not be possible to create a Permission", async () => {
    createPermissionRepository = new CreatePermissionRepositoryFake();
    createNewDateService = new CreateNewDateService();
    createUUIDTokenService = new CreateUUIDTokenService();
    createPermissionUseCase = new CreatePermissionUseCase(
      createPermissionRepository,
      createNewDateService,
      createUUIDTokenService,
    );


    permission = {
      createdAt: new Date(),
      description: "Permissão globa quer permite ao cliente acessar toda a aplicação mas sem poder para editar",
      id: randomUUID(),
      level: 0,
      name: "global",
      updatedAt: null,
    }

    const createPermissionUseCaseResponse =
      await createPermissionUseCase.execute(permission)


    expect(createPermissionUseCaseResponse)
      .toEqual(permission)

  })
})