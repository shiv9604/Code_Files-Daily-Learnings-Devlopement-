import { Urls } from './../../models/urls';
import { ApiService } from './../../services/api/api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { showLoader } from 'src/app/shared/loader/loader.actions';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments:any;
  params:any;
  constructor(public activeRoute:ActivatedRoute,
    public api : ApiService,
    public store:Store,
    public loader:LoaderService) { }

  ngOnInit(): void {
    this.getQueryParams()
  }

  getQueryParams(){
    this.activeRoute.queryParams.subscribe(res=>{
      this.params = res
      console.log("Params Fetched from url =>",this.params)
      this.getCommentsForPost(this.params['id'])
    })
  }

  getCommentsForPost(post_id:any){
    this.loader.showLoader()
    let url = Urls.getCommentsOnCondition + `postId=${post_id}`
    console.log(`Get Comments for postId : ${post_id} URL =>`,url)
    this.api.get(url).subscribe(res=>{
      this.comments = res
      console.log(`Comments Fetched For Post Id : ${post_id} =>`,this.comments)
      this.loader.stopLoader()

    },
    (e)=>{
      console.log("Error Occured while fetching comments",e)
      this.loader.stopLoader()
  
    })
  }
}
