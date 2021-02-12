import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  errorMessage="";
  
  @Input() userObj = { userEmail: '', userPassword: '', userRole:'USER',userFirstName:'',
  userLastName:'',userPhoneNumber:'',userAddresses:''}
  
  
  
  constructor(private UsersService: UsersService,
    public router: Router) { }

  ngOnInit(): void {
    this.UsersService.registerError.subscribe(error=>{
      this.errorMessage=error;
    })

  }

  addUser(data: any) {
    this.UsersService.addUser(this.userObj);
  }


}

