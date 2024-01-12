import { Request, Response } from "express";
import { usuario } from "../data";

export class usuario1 {
  get(req: Request, res: Response) {
    const user = usuario;
    res.json(user);
    console.log(user);
  }
  cadastro() {}
  alterar() {}
}
