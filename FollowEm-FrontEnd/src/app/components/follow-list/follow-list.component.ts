import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Follow } from 'src/app/models/follow.model';
import { User } from 'src/app/models/user.model';
import { FollowService } from 'src/app/services/follow.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-follow-list',
  templateUrl: './follow-list.component.html',
  styleUrls: ['./follow-list.component.css']
})
export class FollowListComponent implements OnInit {

  constructor(private userService: UserService, private followService: FollowService, private router: Router) { }

  followedUsers: User[] = [] //Array of numbers
  current_user_id: any = localStorage.getItem("id");
  follows: number[] = []
  
 
  ngOnInit(): void {
    this.followService.getMyFollows(parseInt(this.current_user_id)).subscribe(data => {
      this.follows = data;
      for (let index = 0; index < this.follows.length; index++) {
        this.userService.getUserById(this.follows[index]).subscribe(data => {this.followedUsers.push(data)})
      }
    })
  }

  viewProfile(id: any){
    this.router.navigate(['/profile', id])
  }
  
}
