import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SocioEvento } from './socios-eventos.entity';

@Injectable()
export class SociosEventosService {
  constructor(
    @InjectRepository(SocioEvento)
    private sociosEventosRepository: Repository<SocioEvento>,
  ) {}

  findAll(): Promise<SocioEvento[]> {
    return this.sociosEventosRepository.find({
      relations: ['socio', 'evento'],
    });
  }

  findOne(id: number): Promise<SocioEvento> {
    return this.sociosEventosRepository.findOne({ where: { id } });
  }
  // Más métodos según tus necesidades
}
