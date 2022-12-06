import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthService} from "./auth.service";
import {authReducer} from "./store/reducers";


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{path: '', component: LoginComponent}]),
    StoreModule.forFeature('auth', authReducer)
  ],
  exports: [LoginComponent]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService
      ]
    }
  }
}
