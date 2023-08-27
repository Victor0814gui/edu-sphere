import { Router as ExpressRoutes } from "express";
import "@shared/infra/injections";
import { UserRoutes } from "@customer/infra/http/routes";
import { RoomRoutes } from "@room/infra/http/routes";

const routes = ExpressRoutes();

routes.use(UserRoutes);
routes.use(RoomRoutes);



export { routes };