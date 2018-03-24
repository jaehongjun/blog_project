import { Component, Input,Output,OnInit,EventEmitter } from '@angular/core';
import { User } from '../user/user'
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//   visible : boolean = true;
  title:string="Login";
  loading:boolean = false;
  user:User = new User();
  loginUser:User;
  loadingImg:string = '../../assets/loading.gif';
  errorMsg : string;
  loginMsg:string = "로그인 하세요 "
  @Output() loginStatus = new EventEmitter<string>();
  @Output() childVisible = new EventEmitter<boolean>();
  //@Input() childVisible:boolean;
  constructor(private ls:LoginService) {
     
   }
  ngOnInit() {
  }
  isLogin():boolean{
    return sessionStorage.getItem('login')==='true';
  }
  close():void{
    this.childVisible.emit(false);
  }
  login():void {
    this.loading = true;
    console.log(this.user);
    this.ls.login(this.user)
    .subscribe(
        datas => {
            if(datas['error']){
                alert(datas['error']);
            }
            if(datas["login"]=="no"){
                alert("아이디 또는 비밀번호를 확인하세요");
            }else{
                if(datas["list"]){
                    this.loginUser = datas["list"][0];
                    sessionStorage.setItem('userId', this.loginUser.userId);
                    sessionStorage.setItem('userPwd', this.loginUser.userPwd);
                    sessionStorage.setItem('userName', this.loginUser.userName);
                    sessionStorage.setItem('userNo', this.loginUser.userNo+'');
                    //sessionStorage.setItem('token', this.loginUser.token);
                    sessionStorage.setItem('login','true');
                    this.loginMsg = this.loginUser.userName + "님 안녕하세요";
                    this.loginStatus.emit(this.loginMsg)
                    alert(this.loginUser.userName + "님 환영합니다.")
                    this.childVisible.emit(false);
                }
            }
        },
        error =>  {
            this.errorMsg = <any>error;
            alert(this.errorMsg);
        },
        () =>{
            this.loading = false;
        }
    )
}
}
