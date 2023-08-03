import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { isLoading } from 'src/app/shared/loader/loader.selector';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  isLoading:any;
  constructor(public store:Store) { }

  ngOnInit(): void {
    this.store.select(isLoading).subscribe(res=>{
      console.log("Show Loader Status =>",res)
      this.isLoading = res
    })
  }

}
