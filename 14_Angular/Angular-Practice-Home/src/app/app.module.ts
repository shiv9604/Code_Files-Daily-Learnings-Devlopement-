import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { FormComponent } from './components/form/form.component'
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RedElDirective } from './directives/red-el.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MaterialModule } from './material/material.module';
import { CrudComponent } from './components/crud/crud.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    ReactiveFormComponent,
    TodoListComponent,
    RedElDirective,
    CrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[MaterialModule]
})
export class AppModule { }
