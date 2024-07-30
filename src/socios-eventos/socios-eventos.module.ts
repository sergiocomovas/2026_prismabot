import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocioEvento } from './socios-eventos.entity';
import { SociosEventosService } from './socios-eventos.service';
import { SociosEventosController } from './socios-eventos.controller';
import { Socio } from '../socios/socios.entity';
import { Evento } from '../eventos/eventos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SocioEvento, Socio, Evento])],
  providers: [SociosEventosService],
  controllers: [SociosEventosController],
})
export class SociosEventosModule {}
