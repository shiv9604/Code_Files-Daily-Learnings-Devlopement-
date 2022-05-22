import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showTask = false
  tasks:any=[]
  addTask(item:string){
    if(item==""){}
    else{
    this.showTask = true
    this.tasks.push({id:this.tasks.indexOf(item),task:item})
    console.log(this.tasks)
    }
    
  }
  removeTask(id:number){
    this.tasks.splice(id,1)
    
  }

}
