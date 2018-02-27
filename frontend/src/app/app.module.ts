import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { OAuthService } from 'angular2-oauth2/oauth-service';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { GroupService } from './group.service';
import { GroupsComponent } from './groups/groups.component';
import { AuthGuard } from './auth-guard.service';
import { FacebookAuthService } from './facebook-auth.service';
import { FacebookComponent } from './facebook/facebook.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    GroupsComponent,
    FacebookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AuthService, 
    UserService, 
    GroupService, 
    AuthGuard, 
    OAuthService,
    FacebookAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
