import { SenwellPageComponent } from './components/senwell-page/senwell-page.component';
import { BlogHomeComponent } from './components/blogs/blog-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { FormComponent } from './components/form/form.component'
import { CommentsComponent } from './components/comments/comments.component';
import { CrudComponent } from './components/crud/crud.component';
import { TypecodeTodosComponent } from './components/typecode-todos/typecode-todos.component';
import { TestHomeComponent } from './components/depronto-test-home/test-home.component';
import { SearchPipeComponent } from './components/search-pipe/search-pipe.component';
import { HomeComponent } from './components/home/home.component';
import { LoginAuthComponent } from './components/login-auth/login-auth.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { CounterComponent } from './counter/counter/counter.component';

const routes: Routes = [
  
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'404',
    component:LoginAuthComponent
  },
  {
    path:'auth',
    loadChildren:()=> import('./modules/auth/auth.module').then(mod=>mod.AuthModule)
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'user',
    loadChildren:()=> import('./modules/user/user.module').then(mod=>mod.UserModule)
  },
  {
    path:'form',
    component:FormComponent,
    children:[
      {
        path:'reactive-form',
        component:ReactiveFormComponent
      }
    ],
    canActivateChild:[AuthGuardService]
  },
  {
    path:'todo-list',
    component:TodoListComponent
  },
  {
    path:'blog-home',
    component:BlogHomeComponent
  },
  {
    path:'comments',
    component:CommentsComponent
  },
  {
    path:'crud',
    component:CrudComponent
  },
  {
    path:'typecode-todos',
    component:TypecodeTodosComponent
  },
  {
    path:'test-home',
    component:TestHomeComponent,
    canActivate:[AuthGuardService]
  }
  ,
  {
    path:'senwell-page',
    component:SenwellPageComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'search-with-pipe',
    component:SearchPipeComponent
  },
  {
    path:'ngrx-counter',
    component:CounterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


