import { Request, Response, Router } from "express";
import { user } from "../../data";
export const routeCadastro = Router();

interface usuarios {
  nome: string;
  idade: string;
  sexo: string;
}

routeCadastro.post("/cadastro", (req: Request, res: Response) => {
  const userBody = req.body;
});
