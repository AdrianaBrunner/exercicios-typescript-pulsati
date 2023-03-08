import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('adri_autores_nodejs')
export class Autores{ 
    @PrimaryGeneratedColumn()
    idAutor: number

    @Column({ type: "varchar2", nullable: false })
    nomeAutor: string

    @Column({ type: "varchar2", nullable: false })
    sobrenomeAutor: string

    @Column({ type: "varchar2", nullable: false })
    dataNascimento: string
}