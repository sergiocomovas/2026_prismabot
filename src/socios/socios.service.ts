import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Socio } from './socios.entity';

@Injectable()
export class SociosService {
  constructor(
    @InjectRepository(Socio)
    private sociosRepository: Repository<Socio>,
  ) {}

  findAll(): Promise<Socio[]> {
    return this.sociosRepository.find();
  }

  findOne(id: number): Promise<Socio> {
    return this.sociosRepository.findOneBy({ id });
  }

  // Más métodos según tus necesidades
}
