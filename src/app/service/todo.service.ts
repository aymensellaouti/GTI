import { Injectable } from '@angular/core';
import {Todo} from '../Model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo [];
  constructor() {
    this.todos = [
      new Todo('lundi', 'manger')
    ];
    console.log(this.todos);
  }
  getTodos() {
    console.log(this.todos);
    return this.todos;
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
  logTodos() {
    console.log(this.todos);
  }
}
