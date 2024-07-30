// Importa los decoradores y módulos necesarios desde Nest.js.
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

// Importa el servicio TodoService, que proporciona métodos para interactuar con la base de datos.
import { TodoService } from './todo.service';

// El decorador @Controller() declara que esta clase es un controlador y especifica la ruta base para todas sus rutas.
@Controller('todo')
export class TodoController {
  // El constructor inyecta el TodoService, que proporciona métodos para interactuar con la base de datos.
  constructor(private readonly todoService: TodoService) {}

  // El decorador @Get() declara que este método maneja las solicitudes HTTP GET.
  @Get()
  findAll() {
    // Recupera todos los elementos Todo de la base de datos.
    return this.todoService.findAll();
  }

  // El decorador @Get('sergio') declara que este método maneja las solicitudes HTTP GET en la ruta /todo/sergio.
  @Get('sergio')
  sergioQuery() {
    // Llama al método sergioQuery del servicio TodoService.
    return this.todoService.sergioQuery();
  }

  // El decorador @Post() declara que este método maneja las solicitudes HTTP POST.
  @Post()
  create(
    // El decorador @Body('title') recupera el campo 'title' del cuerpo de la solicitud.
    @Body('title') title: string,
  ) {
    // Crea un nuevo elemento Todo en la base de datos con el título proporcionado.
    return this.todoService.create(title);
  }

  // El decorador @Put(':id') declara que este método maneja las solicitudes HTTP PUT
  // y espera un parámetro 'id' en la URL.
  @Put(':id')
  update(
    // El decorador @Param('id') recupera el parámetro 'id' de la URL.
    @Param('id') id: number,
    // El decorador @Body('isCompleted') recupera el campo 'isCompleted' del cuerpo de la solicitud.
    @Body('isCompleted') isCompleted: boolean,
  ) {
    // Actualiza el estado 'isCompleted' del elemento Todo con el ID proporcionado.
    return this.todoService.update(id, isCompleted);
  }

  // El decorador @Delete(':id') declara que este método maneja las solicitudes HTTP DELETE
  // y espera un parámetro 'id' en la URL.
  @Delete(':id')
  delete(
    // El decorador @Param('id') recupera el parámetro 'id' de la URL.
    @Param('id') id: number,
  ) {
    // Elimina el elemento Todo con el ID proporcionado de la base de datos.
    return this.todoService.delete(id);
  }
}
