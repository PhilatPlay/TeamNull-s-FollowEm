import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(data: any){
    if(data.password_confirm != data.password){
      alert("Passwords not equal!")
    } else {
      this.userService.createUser(data).subscribe(x => console.log(x))
    }
  }
}
