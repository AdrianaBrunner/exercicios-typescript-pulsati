import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('adri_aeroporto_nodes')
export class Aeroporto {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ type: "varchar2", nullable: false })
  nome: string;
}

