import { Request, Response, Router } from "express";
import { user } from "../../data";
export const routeList = Router();

routeList.get("/list", (req: Request, res: Response) => {
  const usuarios = user;
  res.send(usuarios);
});
