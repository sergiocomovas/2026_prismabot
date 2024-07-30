import { Controller, Get, Param } from '@nestjs/common';
import { SociosEventosService } from './socios-eventos.service';
import { SocioEvento } from './socios-eventos.entity';

@Controller('socios-eventos')
export class SociosEventosController {
  constructor(private readonly sociosEventosService: SociosEventosService) {}

  @Get()
  findAll(): Promise<SocioEvento[]> {
    return this.sociosEventosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<SocioEvento> {
    return this.sociosEventosService.findOne(id);
  }

  // Más rutas según tus necesidades
}
