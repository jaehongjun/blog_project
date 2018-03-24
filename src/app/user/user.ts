export class User{
    userNo:number;
    userId:string;
    userName:string;
    userPwd:string;
    userAge:number;
    complete:boolean;
    userEmail:string;
    token:string;

    constructor(values:Object={}){
        Object.assign(this,values);
    }
}