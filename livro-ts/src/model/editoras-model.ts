import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('adri_editoras_nodejs')
export class Editoras{ 
    @PrimaryGeneratedColumn()
    idEditora: number

    @Column({ type: "varchar2", nullable: false })
    nomeEditora: string

    @Column({ type: "varchar2", nullable: false })
    cnpj: string

}