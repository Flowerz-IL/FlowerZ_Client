import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {User} from '../models/user';
import {Address} from '../models/userAddress';

import {Router} from '@angular/router'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  username= new BehaviorSubject<string>(JSON.parse(JSON.stringify(localStorage.getItem('UserName'))));
  userId= new BehaviorSubject<string>(JSON.parse(JSON.stringify(localStorage.getItem('UserId'))));
  errorMessage="";
  loginError=new BehaviorSubject<string>("");
  registerError=new BehaviorSubject<string>("");
  userAddresses:Address[];
  //private usersRegisterUrl=environment.usersRegisterUrl;
  constructor(private http :HttpClient, private router:Router) {
    this.userAddresses=[];
   }

  baseUrl= 'http://localHost:8080/api/users';

  signIn(user:User) {
    
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    this.http.post<User>(this.baseUrl+'/sign-in',{
      userEmail:user.userEmail,
      userPassword:user.userPassword
    }).subscribe((data:any)=>
    {
      console.log(data);
      console.log(data.information._id);
      console.log(data.information.userName);
      this.username.next(data.information.userName);
      this.userId.next(data.information._id);
      localStorage.setItem('token',data.token);
      localStorage.setItem('UserName',data.information.userName);
      localStorage.setItem('UserId',data.information._id);
      this.getUserAddresses(data.information._id);
      this.router.navigate(['/find-me']);
    },(error)=>{
      console.log(error);
      this.errorMessage=error.error.error;
      this.loginError.next(this.errorMessage);
      console.log(this.errorMessage);


    })
    
  }
  
  addAddress(userId:String, userAddress:Address){
    this.http.post<any>(this.baseUrl+'/'+'specific/'+userId,{
      userAddresses: [{
        name: userAddress.name,
        city: userAddress.city,
        street: userAddress.street,
        houseNumber: userAddress.houseNumber,
        floorNumber:userAddress.floorNumber,
        aptNumber:userAddress.aptNumber
    }]
    }).toPromise().then((data:any)=>{
    },(error)=>{
    this.errorMessage=error;
    this.registerError.next(this.errorMessage);
    console.log(this.errorMessage);

  })
  }


  getUserAddresses(userId:String){
    this.userAddresses=[];
    this.http.get<any>(this.baseUrl+'/specific/'+userId).subscribe((data:any)=>{
      data.userAddresses.forEach((element: any) => {
          this.userAddresses.push(element);
      });
    })
    return this.userAddresses;
  }


  addUser(user:User) {
    
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    this.http.post<User>(this.baseUrl+'/sign-up/',{
      userEmail:user.userEmail,
      userPassword:user.userPassword,
      userFirstName:user.userFirstName,
      userLastName:user.userLastName,
      userPhoneNumber:user.userPhoneNumber,
      userAddresses:new Array

    }).toPromise().then((data:any)=>{
      console.log(data);
      this.signIn(user);
    },(error)=>{
      this.errorMessage=error.error.error;
      this.registerError.next(this.errorMessage);
      console.log(this.errorMessage);

    })
  }

  logoutUser(){
    localStorage.removeItem("token");
    localStorage.removeItem("UserName");
    localStorage.removeItem("UserId");

    this.errorMessage="";
    this.loginError.next(this.errorMessage);

  }

  loggedIn(){
       return localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }

  getUserName(){
    return this.username.toString();
  }


}
