import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, Subscription,filter } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {

  userName:any = "Shivprasad"

  passWord:any = "Kounsalye"
  custom_Observable:any;
  interval:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.interval = Observable.create((observer)=>{
      let counter = 0;
      setInterval(()=>{
        observer.next(counter)

        if(counter>4){
          observer.complete()
        }
        if(counter>5){
          observer.error('exceeded 5')
        }
        counter++;
      },1000)
    })

  this.custom_Observable = this.interval.pipe(filter(val=>{
    if(val==0){
      return false
    }
    else{
      return true
    }
  }),map(data=>{
    return "Counter "+data
  })).subscribe(res=>console.log(res),err=>console.log(err),()=>console.log("Counter Completed"))
  }
  userLogin(item:any){
    console.log(item)
    console.warn(this.route.snapshot.paramMap.get('id'))
  }

  ngOnDestroy() {
      this.custom_Observable.unsubscribe()
  }
}
