import AppErrors from "@/src/shared/infra/errors/app-errors";



interface IUserValidatorParams {
  name: string;
  email: string;
  password: string;
  avatarUrl: string;
}


export class UserValidatorParams {
  validate(props: IUserValidatorParams) {
    if (!props.email && !props.password && !props.avatarUrl) {
      throw new AppErrors("The name, email, password, and avatarUrl properties are required", 204);
    }
  }
}