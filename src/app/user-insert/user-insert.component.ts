import { Component, OnInit } from '@angular/core';
import {User} from '../user/user'
import {LoginService} from '../login/login.service'
@Component({
  selector: 'app-user-insert',
  templateUrl: './user-insert.component.html',
  styleUrls: ['./user-insert.component.css']
})
export class UserInsertComponent implements OnInit {
  user:User;
  constructor(private ls:LoginService) {
    this.user = new User();
   }

  ngOnInit() {
  }
  addUser():void{
    console.log(this.user)
    this.ls.userInsert(this.user).subscribe(
      data => {
        console.log(data);
        if(data["dupl"] == "ERR"){
          alert('아이디가 중복되었습니다.')
        }
        if(data["result"] =="OK"){
          alert("회원가입 되었습니다.")
        }

      }
    )
  }
}
