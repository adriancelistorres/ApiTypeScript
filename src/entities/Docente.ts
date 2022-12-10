import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Docente extends BaseEntity {
  @PrimaryGeneratedColumn()
  iddocente: number;

  @Column()
  idrol: number;

  @Column()
  dni: string;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  email: string;

  @Column()
  genero: string;

  @Column()
  foto: string;

  @Column()
  estado: number;
}
