import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { FormComponent } from './components/form/form.component'

const routes: Routes = [
  {
    path:'admin',
    loadChildren:()=> import('./Modules/admin/admin.module').then(mod=>mod.AdminModule)

  },
  {
    path:'user',
    loadChildren:()=> import('./Modules/user/user.module').then(mod=>mod.UserModule)
  },
  {
    path:'form',
    component:FormComponent,
    children:[
      {
        path:'reactive-form',
        component:ReactiveFormComponent
      }
    ]
  },
  
  {
    path:'todo-list',
    component:TodoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
