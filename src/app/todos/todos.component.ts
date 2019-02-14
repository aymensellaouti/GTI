import { Component, OnInit } from '@angular/core';
import {TodoService} from '../service/todo.service';
import {Todo} from '../Model/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  name = '';
  designation = '';
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    console.log('here');
    this.todos = this.todoService.getTodos();
  }
  deleteTodo(todo) {
    this.todoService.deleteTodo(todo);
  }

  addTodo() {
    const todo = new Todo(this.name, this.designation);
    this.todoService.addTodo(todo);
    this.name = '';
    this.designation = '';
  }

}
