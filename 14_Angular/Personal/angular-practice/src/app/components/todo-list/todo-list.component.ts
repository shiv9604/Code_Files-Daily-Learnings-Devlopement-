import { Urls } from 'src/app/models/urls';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { TodosService } from 'src/app/services/todos/todos.service';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  showTask = false
  tasks: any = []
  todoForUpdate: any;
  btn: string = "Submit"
  todoForm: UntypedFormGroup = new UntypedFormGroup({
    task: new UntypedFormControl('', [Validators.required])
  })
  constructor(public api: ApiService, public todoService: TodosService) { }

  ngOnInit(): void {
    console.log("Todos Fetched from service.")
    console.log("Todo For Update =>", this.todoForUpdate)
    this.getAllTodos()
  }


  // Todos From Service
  addOrUpdate(){
    if(this.todoForUpdate!=undefined){
      this.updateTodo()
    }
    else{
      this.addTodo()
    }
  }
  addTodo() {
    let task = this.todoForm.value['task']
    console.log("Task to be Added =>", task)
    if(task!=''){
      this.todoService.addTodo(task);
      this.refreshTodos();
    }
  } 

  rmTodo(index: any) {
    this.todoService.deleteTodo(index)
  }

  updateTodo(){
    let task = this.todoForm.value['task']
    let index = this.todoForUpdate['id'] -1
    console.log("Updated Value =>",task)
    this.todoService.updateTodo(index, task)
    this.refreshTodos();  
  }

  editTodo(obj: any) {
    this.todoForUpdate = obj
    this.btn = "Update"
    console.log("Update Todo Object =>", obj)
  }

  getAllTodos(){
    this.tasks = this.todoService.getAllTodos()
  }

  refreshTodos() {
    this.getAllTodos();
  }
}
