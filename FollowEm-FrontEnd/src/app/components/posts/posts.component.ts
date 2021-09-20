import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { FollowService } from 'src/app/services/follow.service';
import { Follow } from 'src/app/models/follow.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html', 
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public x: any;  
  public error = '';
  public id = localStorage.getItem('id') || 0;
  followModel = new Follow(0, 0, 0, '');
  constructor(private postService: PostService, private followService: FollowService) { 
    this.postService.getPosts().subscribe((data) => {console.log(data); this.x = data});
  }

  ngOnInit()  {
  }
  submitFollow(d: any) {
    console.log(`DATA: ${d}`);
    console.log(localStorage.getItem('id'));
    const o = {
      followed_id: d,
      following_id: localStorage.getItem('id')
    }
    this.followService.createFollow(o);
  }
}
