import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  users: User[] = [
    {
      id: 1,
      name: "Willy Walker",
      email: "w@gmail.com",
      expertise: "Professional Floor Walker",
    },
    {
      id: 2,
      name: "Pete Powers",
      email: "p@gmail.com",
      expertise: "Phone Charging Expert",
    }
  ]

  posts: Post[] = [
    {
      id: 1,
      user_id: 1,
      title: "Amazing floor!",
      content: "I walked on this amazing floor yesterday. It was so firm!",
      user: this.users[0]
    },
    {
      id: 1,
      user_id: 2,
      title: "I am fully charged.",
      content: "Wake up, plug in phone, go to the bathroom - not necessarily in that order.",
      user: this.users[1]
    }
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
