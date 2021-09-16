import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-follow-list',
  templateUrl: './follow-list.component.html',
  styleUrls: ['./follow-list.component.css']
})
export class FollowListComponent implements OnInit {

  constructor(private router: Router) { }

  follows: User[] = [
    {
      id: 4,
      name: "Joseph",
      email: "j@gmail.com",
      expertise: "Basket Weaving"
    },
    {
      id: 23,
      name: "David",
      email: "d@gmail.com",
      expertise: "Wine Sniffing"
    }
  ]

  followsIds: number[] = [] //Array of numbers
  current_user: number = 3;

  //getFollows needs an ID
 
  ngOnInit(): void {
    /*
    this.userService.getFollows(this.current_user).subscribe(data => {
      this.followsIds = data;
    })
    alert(this.followsIds);

    for (let index = 0; index < this.followsIds.length; index++) {
      const element = this.followsIds[index];
      this.userService.getUserById(element).subscribe(data => {
        this.follows.push(data);
      })
    }
    */
  }

  viewProfile(id: any){
    alert(id);
    // this.router.navigate(['/profile', id])
  }
  
}
