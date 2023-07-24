import { UserRoutes } from "@/src/modules/user/infra/http/routes";
import { Router as ExpressRoutes } from "express";


const routes = ExpressRoutes();

routes.use(UserRoutes);



export { routes };