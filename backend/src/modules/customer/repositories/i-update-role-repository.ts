import { Role } from "@/src/shared/application/entities/role";
import { User } from "@/src/shared/application/entities/user";



interface Permissions {
  name: string;
}

export namespace IUpdateRoleRepository {

  export namespace FindUnique {
    export interface Params {
      name: string;
    }

    export interface Response extends Role { }
  }

  export namespace Update {
    export interface Params extends Role {
      permissions: Permissions[];
    }

    export interface Response extends Role {
      permissions: Permissions[];
    }
  }

  export interface Implementation {
    findUnique: (props: FindUnique.Params) => Promise<FindUnique.Response | null>
    update: (props: Update.Params) => Promise<Update.Response>
  }
}