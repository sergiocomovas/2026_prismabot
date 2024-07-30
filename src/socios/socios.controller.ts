import { Controller, Get, Param } from '@nestjs/common';
import { SociosService } from './socios.service';
import { Socio } from './socios.entity';

@Controller('socios')
export class SociosController {
  constructor(private readonly sociosService: SociosService) {}

  @Get()
  findAll(): Promise<Socio[]> {
    return this.sociosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Socio> {
    return this.sociosService.findOne(id);
  }

  // Más rutas según tus necesidades
}
