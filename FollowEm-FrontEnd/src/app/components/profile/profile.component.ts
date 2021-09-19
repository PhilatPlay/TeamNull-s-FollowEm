import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  user_id: number = 0;

  user: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    expertise: ''
  }

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.user_id = params.user_id
      this.userService.getUserById(this.user_id).subscribe(data => {this.user = data})
    })
  }

}
