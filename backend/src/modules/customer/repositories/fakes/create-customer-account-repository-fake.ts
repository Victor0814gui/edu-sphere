import { ICreateCustomerAccountRepository } from "../i-create-customer-repository";



export class CreateCustomerAccountRepositoryFake
  implements ICreateCustomerAccountRepository.Implementation {
  async update(props: ICreateCustomerAccountRepository.Update.Params):
    Promise<ICreateCustomerAccountRepository.Update.Response> {
    const response = {} as Promise<ICreateCustomerAccountRepository.Update.Response>
    return response;
  };

  async delete(props: ICreateCustomerAccountRepository.Delete.Params):
    Promise<ICreateCustomerAccountRepository.Delete.Response> {
    const response = {} as Promise<ICreateCustomerAccountRepository.Delete.Response>
    return response;
  };

  findPermissions(props: ICreateCustomerAccountRepository.FindPermissions.Params):
    Promise<ICreateCustomerAccountRepository.FindPermissions.Response | null> {
    const response = {} as Promise<ICreateCustomerAccountRepository.FindPermissions.Response | null>
    return response;
  };

  findUniqueRole(props: ICreateCustomerAccountRepository.FindUniqueRole.Params):
    Promise<ICreateCustomerAccountRepository.FindUniqueRole.Response | null> {
    const response = {} as Promise<ICreateCustomerAccountRepository.FindUniqueRole.Response | null>;
    return response;
  };

  findUnique(props: ICreateCustomerAccountRepository.FindUnique.Params):
    Promise<ICreateCustomerAccountRepository.FindUnique.Response | null> {
    const response = {} as Promise<ICreateCustomerAccountRepository.FindUnique.Response | null>;
    return response;
  };

  create(props: ICreateCustomerAccountRepository.Create.Params):
    Promise<ICreateCustomerAccountRepository.Create.Response> {
    const response = {} as Promise<ICreateCustomerAccountRepository.Create.Response>;
    return response;
  };
}