import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers} from "@angular/http";
import { AuthService } from "./auth.service";
import 'rxjs/Rx';

@Injectable()
export class GroupService{
    
    constructor(private http:Http,private authService:AuthService){}

    getGroups(){
        // For Authentication
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
        let options = new RequestOptions({headers:headers});
        return this.http.get('/api/groups',options).map((res)=>res.json());
    }
}