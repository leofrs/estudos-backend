import { Router } from "express";

import { usuario1 } from "../controllers/userController";
import { products } from "../controllers/products";
export const routeList = Router();

const userGet = new usuario1();
const products1 = new products();

routeList.get("/list", userGet.get);
