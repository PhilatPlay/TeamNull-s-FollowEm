import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = {
    id: 1,
    name: "Willy Walker",
    expertise: "Professional Floor Walker",
    email: "w@gmail.com"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
