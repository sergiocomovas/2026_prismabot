import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { SocioEvento } from '../socios-eventos/socios-eventos.entity';

@Entity()
export class Evento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  informacion: string;

  @Column({ type: 'date' })
  fecha: string;

  @Column()
  estado: string;

  @Column('decimal')
  precio: number;

  @Column()
  instrucciones: string;

  @OneToMany(() => SocioEvento, (socioEvento) => socioEvento.evento)
  socioEventos: SocioEvento[];
}
