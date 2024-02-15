"use client";
import { network } from "@src/services/network";
import { ReactNode, createContext, useEffect, useState } from "react";

type UserProps = {
  user: {
    id: string;
    name: string;
    email: string;
    password: string;
    status: "active" | "banned" | "pending" | "inactive";
    createdAt: Date;
    updatedAt: Date | null;
    avatarUrl: string;
    token?: string;
    refreshToken?: string;
  };
  token: string;
  refreshToken: string;
};

type AuthorizationProps = {
  code: string;
  customerId: string;
};

type SignupProps = {
  name: string;
  email: string;
  password: string;
};

type SigninProps = {
  password: string;
  email: string;
};

type AuthContextProps = {
  user: UserProps;
  signIn: (params: SigninProps) => Promise<void>;
  signUp: (params: SignupProps) => Promise<void>;
  signOut: () => Promise<void>;
  authorization: (params: AuthorizationProps) => Promise<void>;
};
const key = "edusphere08code08application09";

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthContextProvider = (props: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProps>({} as UserProps);

  const signIn = async (data: SigninProps) => {
    const user = (await network.post("/customer/signin", data)) as {
      data: UserProps;
    };

    const userString = JSON.stringify(user.data);
    localStorage.setItem(key, userString);

    network.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${user.data.token}`;
  };

  const signUp = async (data: SignupProps) => {
    const user = (await network.post("/customer/signup", {
      ...data,
      avatarUrl: "https://avatars.githubusercontent.com/u/92493696?v=4",
    })) as { data: UserProps };

    const userString = JSON.stringify(user.data);
    localStorage.setItem(key, userString);
  };

  const authorization = async ({ code, customerId }: AuthorizationProps) => {
    try {
      console.log(code);
      const authorizationCustomerResponse = await network.post(
        "/customer/authorization",
        {
          code: code,
          customerId: customerId,
        }
      );
      console.log(authorizationCustomerResponse);
    } catch (err) {
      console.log(err);
    }
  };

  const signOut = async () => {
    localStorage.removeItem(key);
    setUser({} as UserProps);
  };

  useEffect(() => {
    const getUserResponse = localStorage.getItem(key);
    if (!!getUserResponse) {
      const getUserResponseObject = JSON.parse(getUserResponse);
      setUser(getUserResponseObject);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signUp,
        signOut,
        authorization,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
