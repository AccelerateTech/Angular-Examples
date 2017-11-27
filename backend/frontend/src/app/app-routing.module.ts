import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { GroupsComponent } from './groups/groups.component';
import { AuthGuard } from './auth-guard.service';


const routes: Routes = [
    {path:'', component: LoginComponent},
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