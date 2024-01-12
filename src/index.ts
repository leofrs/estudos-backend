import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { routeCadastro } from "./routes/cadastro";
import { routeList } from "./routes/list";

const server = express();

server.use(cors());
server.use(express.json());

server.use(routeCadastro);
server.use(routeList);

server.listen(4000, () => {
  console.log(`Server running on port: 4000`);
});
