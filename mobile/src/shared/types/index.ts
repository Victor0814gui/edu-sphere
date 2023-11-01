import { ICreateCustomerAccountContract } from "../../../../contracts/customer/create-customer-account-contract";

type modalType = 'default' | 'warning' | 'error' | 'success';

type UserType = {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date | null;
  avatarUrl: string;
  token: string;
  refreshToken: string;
}

type SignInMethodProps = {
  email: string;
  password: string;
}

type SignUpProps = {
  email?: string;
  password?: string;
  name: string;
  avatarUrl: string;
}

type ContextAuthContextType = {
  loadingLocalData: boolean;
  user: UserType | null;
  signIn: ({ email, password }: SignInMethodProps) => void;
  signUp: (state: ICreateCustomerAccountContract) => void;
  authorization: (props: any) => void
  signOut: () => void;
  sendResponseToServer: boolean;
}


type UserDrawerType = {
  signin: undefined;
  authorization: undefined;
  signup: undefined;
}

type ToastContentType = {
  id?: string;
  title: string;
  description?: string;
  mode?: "permanent" | "temporary";
  type: 'default' | 'warning' | 'error' | 'success';
  position?: 'center' | 'right' | 'left' | 'top' | 'bottom';
}

type ModalContentType = {
  title: string;
  description?: string;
  type?: modalType
}

type ToastNotificationContextType = {
  toastNotifications: ToastContentType[];
  addToastNotifications: (state: ToastContentType) => void;
  removeToastNotification: (state: string) => void;
}
type ModalContextType = {
  modalContent: ModalContentType | null;
  openModal: (state: boolean) => void;
  closeModal: (state: boolean) => void;
}


export type {
  modalType,
  UserType,
  SignUpProps,
  SignInMethodProps,
  ModalContextType,
  ContextAuthContextType,
  ToastNotificationContextType,
  ToastContentType,
  ModalContentType,
  UserDrawerType,
}