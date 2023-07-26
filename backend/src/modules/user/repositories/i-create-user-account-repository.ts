import { Permission } from "../../../aplication/entities/permission";
import { Role } from "../../../aplication/entities/role";
import { User } from "../../../aplication/entities/user";




export namespace ICreateUserAccountRepository {

  export namespace FindUniqueRole {
    export interface Params {
      level: number;
    }

    export interface Response extends Role { }
  }

  export namespace FindPermissions {
    export interface Params {
    }

    export interface Response extends Array<Permission> { }
  }

  export namespace FindUnique {
    export interface Params {
      id: string;
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
      level: number
    }

    export interface Response extends User { }
  }

  export interface Implementation {
    findPermissions: (props: FindPermissions.Params) => Promise<FindPermissions.Response | null>
    findUniqueRole: (props: FindUniqueRole.Params) => Promise<FindUniqueRole.Response | null>
    findUnique: (props: FindUnique.Params) => Promise<FindUnique.Response | null>
    create: (props: Create.Params) => Promise<Create.Response>
  }
}