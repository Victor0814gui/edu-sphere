import { Permission } from "@/src/shared/application/entities/permission";

declare namespace ICreatePermissionRepository { }

type IPermissions = {
  name: string;
}

type PermissionList = Array<Permission & IPermissions>;


namespace ICreatePermissionRepository {
  export namespace FindUnique {
    export type Params = {
      name: string;
    }
    export type Response = Promise<Permission | null>;
  }
}

namespace ICreatePermissionRepository {
  export namespace Create {
    export type Params = Permission;
    export type Response = Promise<Permission>;
  }
}

namespace ICreatePermissionRepository {
  export namespace Delete {
    export type Params = {
      name: string;
    }
    export type Response = Promise<Permission>;
  }
}

namespace ICreatePermissionRepository {
  export namespace List {
    export type Params = void

    export type Response = Promise<PermissionList>;
  }
}

namespace ICreatePermissionRepository {
  export type Implementation = {
    delete: (props: ICreatePermissionRepository.Delete.Params)
      => ICreatePermissionRepository.Delete.Response;
    findUnique: (props: FindUnique.Params)
      => ICreatePermissionRepository.FindUnique.Response;
    create: (props: Create.Params)
      => ICreatePermissionRepository.Create.Response;
    list: (props: List.Params)
      => ICreatePermissionRepository.List.Response;
  }
}

export { ICreatePermissionRepository }