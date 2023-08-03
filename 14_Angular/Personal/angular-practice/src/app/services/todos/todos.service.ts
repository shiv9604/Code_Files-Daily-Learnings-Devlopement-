import { Injectable, OnInit } from '@angular/core';
import * as EventEmitter from 'events';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService implements OnInit {
  todosArray: any = [
    {
      id: 1,
      task: 'To Complete Advance Angular',
    },
    {
      id: 2,
      task: 'To Complete rxJs',
    },
    {
      id: 3,
      task: 'To Complete ngrx',
    },
  ];

  update = new Subject();
  constructor() {}

  ngOnInit(): void {
  }

  getAllTodos(){
    this.update.next(this.todosArray)
    return this.todosArray;
  }
  addTodo(todo: any) {
    this.todosArray.push({ id: this.todosArray.length + 1, task: todo });
    console.log('Todo Added =>', this.todosArray);
    this.update.next(this.todosArray)
  }
  deleteTodo(id: any) {
    this.todosArray.splice(id, 1);
    console.log('Todo Deleted of id =>', id);
    this.update.next(this.todosArray)
  }

  updateTodo(id: any, todo: any) {
    this.todosArray[id]['task'] = todo;
    console.log('Todos Updated =>', this.todosArray);
    this.update.next(this.todosArray)
  }
}
