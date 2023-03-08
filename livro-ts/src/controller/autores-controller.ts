import { Request, Response } from "express";
import AppDataSource from "../config/database";
import { Autores } from "../model/autores-model";

export class AutoresController {
  async create(req: Request, res: Response) {
    const {
      nomeAutor,
      sobrenomeAutor,
      dataNascimento,
    }: {
      idAutor: number;
      nomeAutor: string;
      sobrenomeAutor: string;
      dataNascimento: string;
    } = req.body;
    const autores = new Autores();
    autores.nomeAutor = nomeAutor;
    autores.sobrenomeAutor = sobrenomeAutor;
    autores.dataNascimento = dataNascimento;

    const repoAutores = AppDataSource.getRepository(Autores);

    await repoAutores.save(autores);
    res.json(autores);
  }

  async get(req: Request, res: Response) {
    const idAutor = req.params.idAutor;
    const repoAutores = AppDataSource.getRepository(Autores);

    const autores = await repoAutores.findOneBy({
      idAutor: parseInt(idAutor, 10),
    });
    res.json(autores);
  }

  async update(req: Request, res: Response) {
    const idAutor = req.params.idAutor;
    const { nomeAutor, sobrenomeAutor, dataNascimento } = req.body;
    const repoAutores = AppDataSource.getRepository(Autores);

    const autores = await repoAutores.findOneBy({
      idAutor: parseInt(idAutor, 10),
    });

    autores.nomeAutor = nomeAutor;
    autores.sobrenomeAutor = sobrenomeAutor;
    autores.dataNascimento = dataNascimento;

    await repoAutores.save(autores);

    res.json(autores);
  }

  async delete(req: Request, res: Response) {
    const idAutor = req.params.idAutor;
    const repoAutores = AppDataSource.getRepository(Autores);

    await repoAutores.delete(idAutor);
    res.json({ message: "Autor deletado com sucesso" });
  }
}
