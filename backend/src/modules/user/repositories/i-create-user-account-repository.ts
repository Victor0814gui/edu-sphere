import { Permission } from "../../../aplication/entities/permission";
import { Role } from "../../../aplication/entities/role";
import { User } from "../../../aplication/entities/user";


interface Permissions {
  id: string
}

export namespace ICreateUserAccountRepository {

  export namespace FindUniqueRole {
    export interface Params {
      name: string;
    }

    export interface Response {
      permissions: Permissions[];
      name: string;
      id: string;
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

    export interface Response extends User { }
  }

  export namespace Create {
    export interface Params {
      id: string;
      name: string;
      email: string;
      password: string
      avatarUrl: string;
      createdAt: Date;
    }

    export interface Response extends User { }
  }

  export namespace Update {
    export interface Params {
      id: string;
      permissions: Permissions[];
      role: string;
    }

    export interface Response extends User {
      role: Role[]
      permissions: Permission[]
    }
  }

  export interface Implementation {
    findPermissions: (props: FindPermissions.Params) => Promise<FindPermissions.Response | null>
    findUniqueRole: (props: FindUniqueRole.Params) => Promise<FindUniqueRole.Response | null>
    findUnique: (props: FindUnique.Params) => Promise<FindUnique.Response | null>
    create: (props: Create.Params) => Promise<Create.Response>
    update: (props: Update.Params) => Promise<Update.Response>
  }
}