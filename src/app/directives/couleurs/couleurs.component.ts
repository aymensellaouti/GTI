import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../service/todo.service';
import {Todo} from '../../Model/Todo';

@Component({
  selector: 'app-couleurs',
  templateUrl: './couleurs.component.html',
  styleUrls: ['./couleurs.component.css'],
  providers: [TodoService]
})
export class CouleursComponent implements OnInit {

  color = 'red';
  background = 'yellow';
  font = 'garamond';
  taille = '20px';
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
  changeTaille(taille) {
    this.taille = taille + 'px';
  }
  addTodo() {
    this.todoService.addTodo(
      new Todo('test', 'fakeTodo'));
  }
  logTodo() {
    this.todoService.logTodos();
  }
}
