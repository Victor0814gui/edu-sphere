import { Router as ExpressRoutes } from "express";
import "@shared/infra/injections";
import { userRoutes } from "@customer/infra/http/routes";
import { roomRoutes } from "@room/infra/http/routes";
import { lessonsRoutes } from "@/src/modules/lessons/infra/http/routes";
import { purchasesRoutes } from "@/src/modules/purchases/infra/http/routes";

const routes = ExpressRoutes();

routes.use("/customer", userRoutes);
routes.use("/rooms", roomRoutes);
routes.use("/lessons", lessonsRoutes);
routes.use("/purchases", purchasesRoutes);

export { routes };