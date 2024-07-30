import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { SociosModule } from './socios/socios.module';
import { EventosModule } from './eventos/eventos.module';
import { SociosEventosModule } from './socios-eventos/socios-eventos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TodoModule,
    SociosModule,
    EventosModule,
    SociosEventosModule,
  ],
})
export class AppModule {}
