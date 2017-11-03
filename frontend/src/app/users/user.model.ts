export class User{
    email:string
    name: string
    password: string
    constructor(options){
        this.email = options.email;
        this.name = options.name;
        this.password = options.password;
    }
}