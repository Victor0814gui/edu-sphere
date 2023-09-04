import { Customer } from "@/src/aplication/entities/user";
import { ICreateCustomerAccountRepository } from "../i-create-customer-account-repository";



export class CreateCustomerAccountRepositoryFake
  implements ICreateCustomerAccountRepository.Implementation {
  private database = {} as Customer;

  async update(props: ICreateCustomerAccountRepository.Update.Params):
    ICreateCustomerAccountRepository.Update.Response {
    const response = {} as ICreateCustomerAccountRepository.Update.Response
    return response;
  };


  async findUnique(props: ICreateCustomerAccountRepository.FindUnique.Params):
    ICreateCustomerAccountRepository.FindUnique.Response {
    const response = {} as ICreateCustomerAccountRepository.FindUnique.Response;
    return response;
  };

  async create(props: ICreateCustomerAccountRepository.Create.Params):
    ICreateCustomerAccountRepository.Create.Response {

    const result: ICreateCustomerAccountRepository.Create.Response =
      new Promise((resolve, reject) => {
        this.database = {
          ...props,
          roleName: props.role,
          createdAt: new Date(),
          updatedAt: props.createdAt,
        }
        resolve(this.database);
      });

    return result;
  };
}