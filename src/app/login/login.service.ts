import { Injectable } from '@angular/core';
import {CommonServiceService} from '../common.service'
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {User} from'../user/user';

@Injectable()
export class LoginService extends CommonServiceService{
  private loginUrl:string="http://localhost:3000/api/login";
//ng g s Login
  constructor(protected _http:Http) {
    super(_http);
  }
  
  login(u:User): Observable<User[]> {
    let paramStr:string  = '?userId=' + u.userId +'&userPwd=' + u.userPwd;
    return super.getJson(this.loginUrl+paramStr);
  }
  userInsert(u:User):Observable<User[]>{
    let paramStr = "/userInsert";
    return super.postJson(this.loginUrl+paramStr,u);
  }
}
