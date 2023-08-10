import { Router as ExpressRoutes } from "express";
import "@shared/infra/injections";
import { UserRoutes } from "@/src/modules/user/infra/http/routes";
import { RoomRoutes } from "@/src/modules/room/infra/http/routes";

const routes = ExpressRoutes();

routes.use(UserRoutes);
routes.use(RoomRoutes);



export { routes };