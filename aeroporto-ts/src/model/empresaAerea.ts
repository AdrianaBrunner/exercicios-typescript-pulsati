import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('adri_empresa_nodes')
export class EmpresaAerea  {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ type: "varchar2", nullable: false })
  nomeEmpresa: string;
}
