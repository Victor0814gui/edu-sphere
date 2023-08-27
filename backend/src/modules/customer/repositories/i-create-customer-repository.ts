import { Permission } from "../../../aplication/entities/permission";
import { Customer } from "../../../aplication/entities/user";

interface Role {
  name: string;
  id: string;
}

interface Permissions {
  name: string;
}


export namespace ICreateCustomerAccountRepository {

  export namespace FindUniqueRole {
    export interface Params {
      name: string;
    }

    export interface Response {
      permissions: Permissions[];
      name: string;
    }
  }

  export namespace FindPermissions {
    export interface Params {
    }

    export interface Response extends Array<Permission> { }
  }

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
    }

    export interface Response extends Customer { }
  }

  export namespace Update {
    export interface Params {
      id: string;
      permissions: Permissions[];
      role: string;
    }

    export type Response = Customer & {
      permissions: Permissions[]
    } | null;
  }

  export namespace Delete {
    export interface Params {
      id: string;
    }

    export interface Response { }
  }

  export interface Implementation {
    findPermissions: (props: FindPermissions.Params) => Promise<FindPermissions.Response | null>
    findUniqueRole: (props: FindUniqueRole.Params) => Promise<FindUniqueRole.Response | null>
    findUnique: (props: FindUnique.Params) => Promise<FindUnique.Response | null>
    create: (props: Create.Params) => Promise<Create.Response>
    update: (props: Update.Params) => Promise<Update.Response>
    delete: (props: Delete.Params) => Promise<Delete.Response>
  }
}