import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Http } from '@angular/http';
import { OAuthService } from 'angular2-oauth2/oauth-service';
import { environment } from '../environments/environment';

@Injectable()
export class FacebookAuthService {
    token: string = null;

    constructor(private router: Router,private oauthService: OAuthService){
          // Login-Url
          this.oauthService.loginUrl = "https://www.facebook.com/v2.11/dialog/oauth"
          
          this.oauthService.redirectUri = window.location.origin + "/auth/facebook/callback";
          
          this.oauthService.clientId = environment.facebookAppId;
          
          this.oauthService.scope = "email user_friends manage_pages";
          
          this.oauthService.setStorage(localStorage);
          
    }

    logIn(){
        this.oauthService.initImplicitFlow();
    }

    isAuthenticated(){
        return this.token != null;
    }

    logOut(){
        this.oauthService.logOut();
    }
}