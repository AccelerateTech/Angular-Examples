import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { GroupsComponent } from './groups/groups.component';
import { AuthGuard } from './auth-guard.service';
import { FacebookComponent } from './facebook/facebook.component';


const routes: Routes = [
    {path:'', component: LoginComponent},
    {path:'auth/facebook/callback',component: FacebookComponent},
    {path:'users',component: UsersComponent,canActivate:[AuthGuard]},
    {path:'groups',component: GroupsComponent,canActivate:[AuthGuard]}
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}
export const routingComponents = []