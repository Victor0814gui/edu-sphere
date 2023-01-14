


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
}

type ToastNotificaitonContextType = {
  toastNotifications: ToastContentType[];
  addToastNotifications:(state:ToastContentType) => void;
  removeToastNotication:(state: string) => void;
}


export type {
  UserType,
  SignInMethodProps,
  ContextAuthContextType,
  ToastNotificaitonContextType,
  ToastContentType,
  UserDrawerType,
}