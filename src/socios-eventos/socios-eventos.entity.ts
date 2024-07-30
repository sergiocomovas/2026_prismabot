import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { Socio } from '../socios/socios.entity';
import { Evento } from '../eventos/eventos.entity';

@Entity()
export class SocioEvento {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Socio, (socio) => socio.socioEventos)
  @JoinColumn({ name: 'socioId' })
  socio: Socio;

  @ManyToOne(() => Evento, (evento) => evento.socioEventos)
  @JoinColumn({ name: 'eventoId' })
  evento: Evento;

  @Column({ type: 'text', nullable: true })
  comentarios: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  cantidadPagada: number;
}
