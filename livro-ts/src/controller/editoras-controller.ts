import { Request, Response } from "express";
import AppDataSource from "../config/database";
import { Editoras } from "../model/editoras-model";

export class EditorasController {
async create(req: Request, res: Response) {
  const { nomeEditora, cnpj }:{
    idEditora: number;
    nomeEditora: string;
    cnpj: string;
  } = req.body;
  const editoras = new Editoras();
  editoras.nomeEditora = nomeEditora;
  editoras.cnpj = cnpj;

  const repoEditoras = AppDataSource.getRepository(Editoras);

  await repoEditoras.save(editoras);
  res.json(editoras);
};

async get(req: Request, res: Response) {
  const idEditora = req.params.idEditora;
  const repoEditoras = AppDataSource.getRepository(Editoras);

  const editoras = await repoEditoras.findOneBy({
    idEditora: parseInt(idEditora, 10),
  });
  res.json(editoras);
};

async update(req: Request, res: Response) {
  const idEditora = req.params.idEditora;
  const {nomeEditora, cnpj} = req.body;
  const repoEditoras = AppDataSource.getRepository(Editoras);

  const editoras = await repoEditoras.findOneBy({
    idEditora: parseInt(idEditora, 10),
  });
  editoras.nomeEditora = nomeEditora;
  editoras.cnpj = cnpj;

  await repoEditoras.save(editoras);
  res.json(editoras);
}

async delete(req: Request, res:Response){
  const idEditora = req.params.idEditora;
  const repoEditoras = AppDataSource.getRepository(Editoras);

  await repoEditoras.delete(idEditora);
  res.json({ message: 'Editora deletado com sucesso' });
}
}