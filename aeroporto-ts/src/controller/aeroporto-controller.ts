import { Request, Response } from "express";
import AppDataSource from "../config/Database";
import { Aeroporto } from "../model/aeroporto";

export class AeroportoController {
  async create(req: Request, res: Response) {
    const {
      nome,
    }: {
      codigo: number;
      nome: string;
    } = req.body;
    const aeroporto = new Aeroporto();
    aeroporto.nome = nome;

    const repoAero = AppDataSource.getRepository(Aeroporto);
    await repoAero.save(aeroporto);
    res.json(aeroporto);
  }

  async get(req: Request, res: Response) {
    const codigo = req.params.codigo;
    const repoAero = AppDataSource.getRepository(Aeroporto);

    const aeroporto = await repoAero.findOneBy({
      codigo: parseInt(codigo, 10),
    });

    res.json(aeroporto);
  }

  async update(req: Request, res: Response) {
    const codigo = req.params.codigo;
    const { nome } = req.body;

    const repoAero = AppDataSource.getRepository(Aeroporto);

    const aeroporto = await repoAero.findOneBy({
      codigo: parseInt(codigo, 10),
    });
    aeroporto.nome = nome;

    await repoAero.save(aeroporto);
    res.json(aeroporto);
  }

  async delete(req: Request, res: Response) {
    const codigo = req.params.codigo;

    const repoAero = AppDataSource.getRepository(Aeroporto);

    await repoAero.delete(codigo);
    res.json({ message: "Aeroporto deletado com sucesso" });
  }
}
