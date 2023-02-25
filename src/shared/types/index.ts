
type modalType = 'default' | 'warning' | 'error' | 'sucess';

type UserType = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  birthday: string;
  birthDate: Date;
}

type SignInMethodProps = {
  email: string;
  password: string;
}

type ContextAuthContextType = {
  user: UserType | null;
  signIn: ({email,password}: SignInMethodProps) => void;
  signUp: (state: UserType) => void;
  signOut: () => void;
  sendResponseToServer: boolean;
}


type UserDrawerType = {
  signin: undefined;
  signupstepone: undefined;
  signupsteptwo: undefined;
  signinstepthree: undefined;
}

type ToastContentType = {
  id?: string;
  title: string;
  description?: string;
  type?: 'default' | 'warning' | 'error' | 'sucess';
  position?: 'center' | 'right' | 'left' | 'top' | 'bottom';
}

type ModalContentType = {
  title: string;
  description?: string;
  type?: modalType
}

type ToastNotificaitonContextType = {
  toastNotifications: ToastContentType[];
  addToastNotifications:(state:ToastContentType) => void;
  removeToastNotication:(state: string) => void;
}
type ModalContextType = {
  modalContent: ModalContentType | null;
  openModal:(state: boolean) => void;
  closeModal:(state: boolean) => void;
}


export type {
  modalType,
  UserType,
  SignInMethodProps,
  ModalContextType,
  ContextAuthContextType,
  ToastNotificaitonContextType,
  ToastContentType,
  ModalContentType,
  UserDrawerType,
}