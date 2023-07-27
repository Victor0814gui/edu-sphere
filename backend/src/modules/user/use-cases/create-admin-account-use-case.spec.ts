import { container, inject } from "tsyringe"
import { CreateUserAccountRepositoryFake } from "../repositories/fakes/create-user-account-repository-fake";
import crypto from "crypto";



let createUserAccountRepositoryFakeInstance: CreateUserAccountRepositoryFake;


describe("Should be able create an admin account", () => {

  it("Create admin account", async () => {
    createUserAccountRepositoryFakeInstance = container.resolve(CreateUserAccountRepositoryFake);

    const createUserAccountRepositoryFakeInstanceResult = await createUserAccountRepositoryFakeInstance.create({
      id: crypto.randomUUID(),
      avatarUrl: "https://avatars.githubusercontent.com/u/92493696?v=4",
      email: "asdlfkjaklsdf@gmail.com",
      name: "askdjfçlkajsdf",
      password: "alkjdçflkjaçsdf",
      createdAt: new Date(),
    })

    expect(createUserAccountRepositoryFakeInstanceResult);
  })
})