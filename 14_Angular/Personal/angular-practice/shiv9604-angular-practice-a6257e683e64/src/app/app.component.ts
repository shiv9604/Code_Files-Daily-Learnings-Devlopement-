import { Component, ViewContainerRef, ComponentFactoryResolver,OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from './services/api/api.service';
import { FirebaseCrudService } from './services/firebase/firebase-crud.service';
import { TodosService } from './services/todos/todos.service';
import { appState } from './Store/app.state';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'Angular-Practice-Home';

  constructor(private fcs:FirebaseCrudService,
    public api:ApiService,public todoService:TodosService){}

  ngOnInit() {
    this.todoService.update.subscribe((status)=>{
      console.log("Todo List Status in App.Component.ts =>",status)
    })
    this.envName();
    console.log("App State =>",appState)
  
  }     

  envName(){
    console.log(`------------------Current Enviornment Name => ${environment['name']}---------------`)
  }


  ngOnDestroy(){
  }

  
}



