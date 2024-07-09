import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {PostService} from '../Services/post.service';
import { Post } from '../models/post';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit{

  posts?:Array<any>  
constructor(private postService: PostService ){
this.posts=postService.postList
}
ngOnInit():void {

}
addNewData(){
  let newPost: Post={
    id:7,
    postTitle: "Post 7"
  }
  this.postService.addPost(newPost);

}

}


/*
title:string="List of posts";
messagePost:string="Message post";
parentList:string="Parent List posts";


childMessage:string = 'From child component';

outputChildMessage: string = 'Message from Child Componenet Via Output'

@Input() fromParent?:string; 

@Output() messageEvent = new EventEmitter<string>();

  constructor(){}

  ngOnInit():void {

  }
  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage)
  }
*/