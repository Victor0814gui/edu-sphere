


interface IUserValidatorParams {
  name: string;
  email: string;
  password: string;
  avatarUrl: string;
}


export class UserValidatorParams {
  public validate(props: IUserValidatorParams) {
    if (!props.email || !props.password || !props.avatarUrl) {
      throw new Error("The name, email, password, and avatarUrl properties are required");
    }
  }
}