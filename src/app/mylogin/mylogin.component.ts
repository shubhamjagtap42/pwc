import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { appstate } from '../Store/app.state';
import { login } from '../states/LOGIN STATE/loginform.action';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-mylogin',
  templateUrl: './mylogin.component.html',
  styleUrls: ['./mylogin.component.css']
})
export class MyloginComponent {

  username!:string;
  password!:string;
  token!:string;


  constructor(private store:Store<{app:appstate}>){}

  onSubmit():void
  {

    // console.log(this.username,this.password)
    this.store.dispatch(login({
      username: this.username,
      password: this.password,
      token: this.token,
    }))

    console.log(this.username,this.password);
    
  }

}
