import { ComponentFixture, TestBed, } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import {DebugElement} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule,By} from "@angular/platform-browser";
import {AuthService} from "../auth.service";
import {AuthServiceMock} from "../auth.mock.service"


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        {provide: AuthService, useClass: AuthServiceMock}
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule
      ]
    })
    .compileComponents().then(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
      });
  });

  it('Form should be invalid', async() => {
    component.loginForm.controls['username'].setValue("");
    component.loginForm.controls['password'].setValue("");
    expect(component.login).toBeFalsy();
  });

  it('Form should be invalid', async() => {
    component.loginForm.controls['username'].setValue("MTN_user");
    component.loginForm.controls['password'].setValue("");
    expect(component.login).toBeFalsy();
  });

  it('Form should be invalid', async() => {
    component.loginForm.controls['username'].setValue("");
    component.loginForm.controls['password'].setValue("Password123");
    expect(component.login).toBeFalsy();
  });

  it('Form should be invalid', async() => {
    component.loginForm.controls['username'].setValue("MTN_user");
    component.loginForm.controls['password'].setValue("abc");
    expect(component.login).toBeFalsy();
  });

  it('Form should be invalid', async() => {
    component.loginForm.controls['username'].setValue("MTN_user");
    component.loginForm.controls['password'].setValue("Password12Password123");
    expect(component.login).toBeFalsy();
  });


  it('Form should be valid', async() => {
    component.loginForm.controls['username'].setValue("MTN_user");
    component.loginForm.controls['password'].setValue("Password123");
    expect(component.login).toBeTruthy();
  });

});
