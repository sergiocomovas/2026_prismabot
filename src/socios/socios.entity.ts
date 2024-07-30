import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { SocioEvento } from '../socios-eventos/socios-eventos.entity';

@Entity()
export class Socio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellidos: string;

  @Column()
  antiguedad: number;

  @Column({ type: 'date' })
  fechaFinMembresia: string;

  @Column()
  activo: boolean;

  @Column()
  telefonoContacto1: string;

  @Column()
  telefonoContacto2: string;

  @OneToMany(() => SocioEvento, (socioEvento) => socioEvento.evento)
  socioEventos: SocioEvento[];
}
