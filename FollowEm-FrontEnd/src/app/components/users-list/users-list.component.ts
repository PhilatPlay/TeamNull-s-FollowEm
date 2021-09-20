import { Component, OnInit } from '@angular/core';
import { FollowService } from 'src/app/services/follow.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public z: any;
  public error: any;
  constructor(private userService: UserService, private folowService: FollowService) {
    this.userService.getUsers().subscribe((data) => {console.log(data); this.z = data});
   }

  ngOnInit(): void {   
  }

  submitFollow() {
    if(localStorage.getItem('id')) {

    }else{
      this.error = "You must be logged in to follow a user";
      setTimeout(() => {
        this.error = ''
      },4000);
    }
  }
}
