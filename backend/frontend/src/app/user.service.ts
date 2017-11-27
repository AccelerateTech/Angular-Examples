import { Injectable } from "@angular/core";
import { Http, RequestOptions,Headers } from "@angular/http";
import { AuthService } from "./auth.service";
import 'rxjs/Rx';
import { User } from "./users/user.model";


@Injectable()
export class UserService{
    
    constructor(private http:Http,private authService:AuthService){}

    getUsers(){
        // For Authentication
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
        let options = new RequestOptions({headers:headers});
        return this.http.get('/api/users',options).map((res)=>{
            return res.json().map((userJsonObj)=>new User(userJsonObj))
        });
    }
}

