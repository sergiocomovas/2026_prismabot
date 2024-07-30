// Importa los decoradores y módulos necesarios desde Nest.js y TypeORM.
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Importa la entidad Todo que representa la estructura de nuestros datos en la base de datos.
import { Todo } from './todo.entity';

// El decorador @Injectable() marca la clase como un proveedor que puede ser gestionado por el contenedor de IoC de Nest.
@Injectable()
export class TodoService {
  // El constructor inyecta el repositorio de Todo, que proporciona métodos para interactuar con la base de datos.
  constructor(
    // @InjectRepository(Todo) le dice a Nest que inyecte el repositorio para la entidad Todo.
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  // Método para recuperar todos los elementos Todo de la base de datos.
  findAll() {
    return this.todoRepository.find();
  }

  // Método para crear un nuevo elemento Todo en la base de datos.
  create(title: string) {
    const todo = new Todo(); // Crea una nueva instancia de Todo.
    todo.title = title; // Asigna el título proporcionado a la instancia de Todo.
    return this.todoRepository.save(todo); // Guarda la instancia de Todo en la base de datos.
  }

  // Método para actualizar el estado 'isCompleted' de un elemento Todo.
  async update(id: number, isCompleted: boolean) {
    // Busca el elemento Todo con el ID proporcionado.
    const todo = await this.todoRepository.findOne({ where: { id: id } });
    if (todo) {
      // Si el elemento Todo existe...
      todo.isCompleted = isCompleted; // Actualiza su estado 'isCompleted'.
      return this.todoRepository.save(todo); // Guarda el elemento Todo actualizado en la base de datos.
    }
    return null; // Si el elemento Todo no existe, devuelve null.
  }

  // Método para eliminar un elemento Todo de la base de datos.
  delete(id: number) {
    // Elimina el elemento Todo con el ID proporcionado y devuelve una promesa.
    // El .then(() => {}) asegura que el método devuelva una promesa que se resuelve en void.
    return this.todoRepository.delete(id).then(() => {});
  }

  // Método para realizar una consulta personalizada (por ejemplo, SELECT * FROM todo).
  async sergioQuery() {
    return this.todoRepository.query('SELECT * FROM todo');
  }
}
