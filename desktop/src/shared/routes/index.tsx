import { useAuthContextProvider } from "../contexts/auth";
import { AuthRoutes } from "./auth";
import { UserDrawerRoutes } from "./user";

export function Router() {
  const { user } = useAuthContextProvider();
  return user?.id ? <UserDrawerRoutes /> : <AuthRoutes />
}