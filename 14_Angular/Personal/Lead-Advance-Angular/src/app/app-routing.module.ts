import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecPageComponent } from './components/sec-page/sec-page.component';
import { FormPageComponent } from './components/form-page/form-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [

  {
    path:'sec-page',
    component:SecPageComponent,
    children:[
      {
        path:'form-page',
        component:FormPageComponent
      }
    ]
  },
  {
    path:'form-page',
    component:FormPageComponent
  },
  {
    path:'home-page',
    component:HomePageComponent
  },
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'sec-page/form-page',
    component:FormPageComponent
  },
  {
    path:'**',
    component:HomePageComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
