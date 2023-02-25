import { AppProvider } from "../contexts";
import { ContextAuthContextProvider, useAuthContextProvider } from "../contexts/auth";
import { COLORS } from "../theme";
import { AuthRoutes } from "./auth-routes";
import { UserDrawerRoutes } from "./user-routes";

export function Router(){
  const { user } = useAuthContextProvider();
  return user?.id ? <UserDrawerRoutes/> : <AuthRoutes/>
}