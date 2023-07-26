import { ICreateUserAccountRepository } from "../i-create-user-account-repository";



export class CreateUserAccountRepositoryFake
  implements ICreateUserAccountRepository.Implementation {

  findPermissions(props: ICreateUserAccountRepository.FindPermissions.Params):
    Promise<ICreateUserAccountRepository.FindPermissions.Response | null> {
    const response = {} as Promise<ICreateUserAccountRepository.FindPermissions.Response | null>
    return response;
  };

  findUniqueRole(props: ICreateUserAccountRepository.FindUniqueRole.Params):
    Promise<ICreateUserAccountRepository.FindUniqueRole.Response | null> {
    const response = {} as Promise<ICreateUserAccountRepository.FindUniqueRole.Response | null>;
    return response;
  };

  findUnique(props: ICreateUserAccountRepository.FindUnique.Params):
    Promise<ICreateUserAccountRepository.FindUnique.Response | null> {
    const response = {} as Promise<ICreateUserAccountRepository.FindUnique.Response | null>;
    return response;
  };

  create(props: ICreateUserAccountRepository.Create.Params):
    Promise<ICreateUserAccountRepository.Create.Response> {
    const response = {} as Promise<ICreateUserAccountRepository.Create.Response>;
    return response;
  };
}