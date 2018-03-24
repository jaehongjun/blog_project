import { Component } from '@angular/core';
import {RouterLink} from './router-link'
import { Http,Response,Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import { Input } from '@angular/core/src/metadata/directives';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mList : Array<RouterLink> = [] ;
  url:string = "http://localhost:3000/";
  loginText: string = "로그인하세요";
  login:string = "LOGIN";
  loginVisible:boolean = false; 
  constructor(protected _http:Http, private elementRef:ElementRef) {
    // var s = document.createElement("script");
    // s.type = "text/javascript";
    // s.src = "/assets/js/jquery.min.js";
    // this.elementRef.nativeElement.appendChild(s);
    // var s1 = document.createElement("script");
    // s1.type = "text/javascript";
    // s1.src = "/assets/js/main.js";
    // this.elementRef.nativeElement.appendChild(s1);
    // var s2 = document.createElement("script");
    // s2.type = "text/javascript";
    // s2.src = "/assets/js/skel.min.js";
    // this.elementRef.nativeElement.appendChild(s2);
    // var s3 = document.createElement("script");
    // s3.type = "text/javascript";
    // s3.src = "/assets/js/util.js";
    // this.elementRef.nativeElement.appendChild(s3);

    this.menuList().subscribe(
      res => {
        console.log(res)
        this.mList = res.json().list;
        console.log(this.mList);
      }
    )
  }
  ngOnInit() {

  }
  menuList() : Observable<any>{
     let url : string = "api/menus/"
     console.log(url);
    return this._http.get(this.url+url)
  }
  childVisible(boolean:Boolean):void{
    this.loginVisible = false;
  }
  buttonView() : void{
    this.loginVisible = true;
  }
  loginStatus(loginMeg:string):void{
    this.loginText = loginMeg;
    this.login = "LOGOUT"
  }
}
