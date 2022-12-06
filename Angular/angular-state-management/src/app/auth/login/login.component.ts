import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Store, StoreModule} from "@ngrx/store";
import {AuthService} from "../auth.service";
import {tap} from "rxjs/operators";
import {noop} from "rxjs";
import {Router} from "@angular/router";
import {AuthState} from "../store/reducers";
import {login} from "../store/auth.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(
    private auth: AuthService,
    private router:Router,
    private store: Store<AuthState>
    ) {

  }

  ngOnInit() {

  }

  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)
    ])
  });

  get username(){
    return this.loginForm.get('username')
  }

  get password(){
    return this.loginForm.get('password')
  }

  login(){
    this.auth.login(this.username?.value,this.password?.value)
      .pipe(
        tap(user => {
          debugger;
          console.log(user);
          const newLoginAction = login({user});
          this.store.dispatch(newLoginAction);
          this.router.navigate(['/dashboard']);
        })
      )
      .subscribe(
        noop,
        () => {
          debugger;
          this.loginForm.setErrors({
            invalidLogin: true
          })
        }
      )
  }
}
