import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from "../../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel = new User(0, '', '','', '');
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  onSubmit(): void {   
      this.userService.userLogin(this.loginModel.email, this.loginModel.password).subscribe(x => console.log(x))
    }
  }
  

