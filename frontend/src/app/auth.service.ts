import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
    token: string = null;

    constructor(private router: Router,private http:Http){
        this.token = localStorage.getItem('myToken');
    }

    logIn(email: string, password: string){
        return this.http.post('/api/login',{email:email,password:password}).subscribe((res)=>{
            this.token = res.json().token;
            localStorage.setItem('myToken',this.token);
            this.router.navigate(['/users']);
        },(err)=>{
            alert(err);
        });
    }

    isAuthenticated(){
        return this.token != null;
    }

    logOut(){
        this.token = null;
        localStorage.removeItem('myToken');
    }
}