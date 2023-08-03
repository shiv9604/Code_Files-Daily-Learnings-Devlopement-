import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { exhaustMap, map } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';



@Injectable({
  providedIn: 'root'  
})
export class CounterEffectsService {

  constructor(private actions$:Actions,private api:ApiService) { }

  // login$ = createEffect(()=>{
  // return this.actions$.pipe(
  //     ofType(action1),
  //     exhaustMap((action:any)=>{

  //       console.log(action)
  
  //       let typeCodeTodos = ''
  //       return this.api.get(typeCodeTodos).pipe(
  //         map((data:any)=>{
  //           return action2({res:data})
  //         })
  //       )
  //     })
  // )
  // })

  // login_redirect$ = createEffect(()=>{
  //   return this.action$.pipe(
  //     ofType(action1),map((action)=>{
  //       return this.router.navigate(['/'])
  //     },{dispatch:false})
  //   )
  // })
  


}
