import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public x: any;  
  constructor(private postService: PostService) { 
    postService.getPosts().subscribe((data) => {console.log(data); this.x = data});
  }

  ngOnInit(): void {
  }
}
