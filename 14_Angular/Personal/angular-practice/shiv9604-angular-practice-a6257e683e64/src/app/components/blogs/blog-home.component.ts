import { Urls } from '../../models/urls';
import { ApiService } from '../../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { showLoader, stopLoader } from 'src/app/shared/loader/loader.actions';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {

  allblogs:any;
  singleBlog:any;
  blogGroup:any;
  constructor(
    public api:ApiService,
    public router:Router,
    public store:Store,
    public loader:LoaderService
  ) { }

  ngOnInit(): void {
    this.getBlogs()
  }

  getBlogs(){
    this.loader.showLoader()
    let url = Urls.allblogs
    console.log("All Blogs Url=>",url)
    this.api.get(url).subscribe(res=>{
      this.allblogs = res
      console.log("All Blogs Fetched from TypeCode=>",this.allblogs)
      this.getBlogsByCondition('userId=1')
      this.loader.stopLoader()

    },(e)=>{
      console.log("Error Occured While fetching blogs at depronto...",e)
      this.loader.stopLoader()
    })
  }

  getSingleBlog(blog_id:any){
    this.loader.showLoader()
    let url = Urls.getSingleBlog + blog_id
    console.log("Single Blog Url=>",url)
    this.api.get(url).subscribe(res=>{
      this.singleBlog = res
      console.log("Single Blog Fetched from TypeCode=>",this.singleBlog)
      this.loader.stopLoader()
    },e=>{
      console.log("Err occured while fetching single blog",e)
      this.loader.stopLoader()
    })
  }

  getBlogsByCondition(queryParams:any){
    this.loader.showLoader()
    let url = Urls.getBlogsOnCondition + queryParams
    console.log("Blog by user Url=>",url)
    this.api.get(url).subscribe(res=>{
      this.blogGroup = res
      console.log(`Blogs Fetched from TypeCode for the condition : ${queryParams} =>`,res)
      this.loader.stopLoader()
    },e=>{
      console.log("Err occured while fetching  blog with condition",e)
      this.loader.stopLoader()
    })
  }

  comments(post_id:any){
    console.log("Routing To Comments with post id : ",post_id)
    this.router.navigate([`comments`],{queryParams:{id:post_id}})
  }


}
