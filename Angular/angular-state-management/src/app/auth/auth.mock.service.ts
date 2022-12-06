import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {User} from "./model/user.model";


@Injectable()
export class AuthServiceMock {

  private mockUser: User ={
    "id": 1,
    "username": "MTN_user",
    "firstName": "MTN",
    "lastName": "User"
  }
  login(username:any, password:any): Observable<User> {
    return of(this.mockUser);
  }

}
