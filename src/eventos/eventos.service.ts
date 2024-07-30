import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evento } from './eventos.entity';

@Injectable()
export class EventosService {
  constructor(
    @InjectRepository(Evento)
    private eventosRepository: Repository<Evento>,
  ) {}

  findAll(): Promise<Evento[]> {
    return this.eventosRepository.find();
  }

  findOne(id: number): Promise<Evento> {
    return this.eventosRepository.findOneBy({ id });
  }

  // Más métodos según tus necesidades
}
