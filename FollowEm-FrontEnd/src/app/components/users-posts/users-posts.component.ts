import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-users-posts',
  templateUrl: './users-posts.component.html',
  styleUrls: ['./users-posts.component.css']
})
export class UsersPostsComponent implements OnInit {

  public singleId = localStorage.getItem('sid');
  public sp:any;
  
  public rt = localStorage.getItem('posts');
  public s = JSON.parse(localStorage.getItem('posts')!);
    constructor(private postService: PostService) { }
  
    ngOnInit() {
      // this.getSinglePost();
    }
  getSinglePost():any {
    // return this.sp = this.postService.getPostsByAuthorId(this.singleId)
  }
}
