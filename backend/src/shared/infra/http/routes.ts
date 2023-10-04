import { Router as ExpressRoutes } from "express";
import "@shared/infra/injections";
import { userRoutes } from "@customer/infra/http/routes";
import { roomRoutes } from "@room/infra/http/routes";
import { lessonsRoutes } from "@/src/modules/lessons/infra/http/routes";

const routes = ExpressRoutes();

routes.use(userRoutes);
routes.use(roomRoutes);
routes.use(lessonsRoutes);


export { routes };