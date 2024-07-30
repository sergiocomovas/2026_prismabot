import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Socio } from './socios.entity';
import { SociosService } from './socios.service';
import { SociosController } from './socios.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Socio])],
  providers: [SociosService],
  controllers: [SociosController],
})
export class SociosModule {}
