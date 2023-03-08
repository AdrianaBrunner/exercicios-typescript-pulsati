import { Request, Response } from "express";
import AppDataSource from "../config/Database";
import { EmpresaAerea } from "../model/empresaAerea";

export class EmpresaAereaController {
  async create(req: Request, res: Response) {
    const {
      nomeEmpresa,
    }: {
      nomeEmpresa: string;
    } = req.body;
    const empresa = new EmpresaAerea();
    empresa.nomeEmpresa = nomeEmpresa;

    const repoEmpresa = AppDataSource.getRepository(EmpresaAerea);
    await repoEmpresa.save(empresa);
    res.json(empresa);
  }

  async get(req: Request, res: Response) {
    const codigo = req.params.codigo;
    const repoEmpresa = AppDataSource.getRepository(EmpresaAerea);

    const empresa = await repoEmpresa.findOneBy({
      codigo: parseInt(codigo, 10),
    });

    res.json(empresa);
  }

  async update(req: Request, res: Response) {
    const codigo = req.params.codigo;
    const { nomeEmpresa } = req.body;

    const repoEmpresa = AppDataSource.getRepository(EmpresaAerea);

    const empresa = await repoEmpresa.findOneBy({
      codigo: parseInt(codigo, 10),
    });
    empresa.nomeEmpresa = nomeEmpresa;

    await repoEmpresa.save(empresa);
    res.json(empresa);
  }

  async delete(req: Request, res: Response) {
    const codigo = req.params.codigo;

    const repoEmpresa = AppDataSource.getRepository(EmpresaAerea);

    await repoEmpresa.delete(codigo);
    res.json({ message: "Empresa deletado com sucesso" });
  }
}
