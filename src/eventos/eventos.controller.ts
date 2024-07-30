import { Controller, Get, Param } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { Evento } from './eventos.entity';

@Controller('eventos')
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  @Get()
  findAll(): Promise<Evento[]> {
    return this.eventosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Evento> {
    return this.eventosService.findOne(id);
  }

  // Más rutas según tus necesidades
}
