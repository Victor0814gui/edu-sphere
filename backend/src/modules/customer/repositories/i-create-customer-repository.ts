import { Permission } from "@aplication/entities/permission";
import { Customer } from "@aplication/entities/user";


interface Permissions {
  name: string;
}

export namespace ICreateCustomerAccountRepository {
  export namespace FindUnique {
    export interface Params {
      email: string;
    }

    export interface Response extends Customer { }
  }

  export namespace Create {
    export interface Params {
      id: string;
      role: string;
      name: string;
      email: string;
      password: string
      avatarUrl: string;
      createdAt: Date;
      status: string;
      subscriptionId: string;
    }

    export type Response = Promise<Customer>;
  }

  export namespace Update {
    export interface Params {
      id: string;
      permissions: Permissions[];
      role: string;
    }

    export type Response = Customer & {
      permissions: Permissions[]
    };
  }

  export interface Implementation {
    findUnique: (props: FindUnique.Params) => Promise<FindUnique.Response | null>
    create: (props: Create.Params) => Create.Response
    update: (props: Update.Params) => Promise<Update.Response>
  }
}