import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  //Current user
  user: User = {
    id: 14,
    name: "Walter Weaver",
    email: "basket@gmail.com",
    expertise: "Basket Weaving"
  }

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onSubmit(data: any): void {
    this.postService.createPost(data).subscribe(x => console.log(x))
  }
}
