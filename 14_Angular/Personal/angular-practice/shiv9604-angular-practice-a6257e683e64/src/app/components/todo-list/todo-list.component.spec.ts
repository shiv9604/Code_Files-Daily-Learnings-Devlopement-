import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { TodosService } from '../../services/todos/todos.service';
import { ApiService } from 'src/app/services/api/api.service';
import { DebugElement, OnInit } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

fdescribe('TodoListComponent', () => {
  let component: TodoListComponent;
  let bannerElement:HTMLElement;
  let bannerDebugElement:DebugElement;
  let fixture: ComponentFixture<TodoListComponent>;
  let apiService = jasmine.createSpyObj('ApiService',['get','post','put','delete']);
  let todoService = jasmine.createSpyObj('TodosService',['getAllTodos','addTodo','deleteTodo','updateTodo']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListComponent ],
      providers: [
        {provide:TodosService,userValue:todoService},
        {provide:ApiService,useValue:apiService},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    bannerDebugElement = fixture.debugElement;
    bannerElement = bannerDebugElement.nativeElement;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title Todo with Service in <h1></h1>', () => {
    // let h1 = bannerElement.querySelector('h1')    
    let h1 = bannerDebugElement.query(By.css('h1')).nativeElement
    let value = 'Todo List with Service'

    expect(h1.textContent).toEqual(value)
  })

  it('should all the todos while initializing',()=>{

    let todos = [{id:1,task:'task 1'},{id:2,task:'task 2'},{id:3,task:'task 3'}]
    
    todoService.getAllTodos.and.returnValue(todos)

    // We can reload the component with detectChanges
    // fixture.detectChanges();

    // We can call the ngOnInit() method directly from the component class.
    component.getAllTodos();

    expect(component.tasks.length).toEqual(3)
  })
});
