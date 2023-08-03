import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getSinglePost, Posts } from '../State/counter-selectors';
import { addPost, customIncrement, deletePost, updatePost } from '../State/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  customVal:any;
  posts:any;
  constructor(public store:Store) { }

  ngOnInit(): void {
    this.getPosts()
  }

  addCounter(){
    this.store.dispatch(customIncrement({data:this.customVal})); 
  }

  getPosts(){
    this.store.select(Posts)
    .subscribe(res=>{
      this.posts = res
      console.log("Get Posts =>",this.posts)
    })
  }

  addPost(){
    let post = {
      name:`Shiv`,
      age:19
    }
    this.store.dispatch(addPost(post))
  }

  updatePost(data:any){
    let posts = this.posts
    let newData = {
      id:data.id,
      name:`Updated ${data.name}`,
      age :data.age
    }
    this.store.dispatch(updatePost({updated:newData}))
  }
  
  deletePost(id:any){
    console.log("Delete Id =>",id)
    this.store.dispatch(deletePost({id:id}))
  }
}
