import { Component, OnInit } from '@angular/core';
import { Urls } from 'src/app/models/urls';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-search-pipe',
  templateUrl: './search-pipe.component.html',
  styleUrls: ['./search-pipe.component.css']
})
export class SearchPipeComponent implements OnInit {
  searchVal:string = ''
  todos:any;
  constructor(public api:ApiService) { }

  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList(){
    let url = Urls.allComments;
    console.log("Get All Todo's URL=>", url);
    this.api.get(url).subscribe((res) => {
      this.todos = res;
      console.log('Tasks Fetched From typecode =>', this.todos);
    });
  }
  
}
