import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./model/user.model";


@Injectable()
export class AuthService {

  constructor(private http:HttpClient) {

  }

  login(username:any, password:any): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users/authenticate', {user:username,password:password});
  }

}
