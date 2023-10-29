import AppErrors from "@shared/infra/errors/app-errors";



interface ICustomerValidatorParams {
  name: string;
  email: string;
  password: string;
  avatarUrl: string;
}


export class CustomerValidatorParams {
  validate(props: ICustomerValidatorParams) {
    if (!props.email && !props.password && !props.avatarUrl) {
      throw new AppErrors("The name, email, password, and avatarUrl properties are required", 204);
    }
  }
}