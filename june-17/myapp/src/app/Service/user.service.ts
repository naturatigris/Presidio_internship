import { BehaviorSubject, Observable } from "rxjs";
import { UserLoginModel } from "../models/userloginmodel";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";


@Injectable()
export class UserService
{
    private http = inject(HttpClient);
    private usernameSubject = new BehaviorSubject<string|null>(null);
    username$:Observable<string|null> = this.usernameSubject.asObservable();

    validateUserLogin(user:UserLoginModel)    {
        if(user.username.length<3)
        {
            this.usernameSubject.next(null);
            
        }
            
        else
        {
            this.callLoginAPI(user).subscribe(
                {
                    next:(data:any)=>{        
                        alert('Login successful');


                        this.usernameSubject.next(user.username);
                        localStorage.setItem("token",data.accessToken)
                    },      error: (err) => {
        if (err.status === 400 && err.error?.message) {
          alert(err.error.message); // e.g., "Invalid credentials"
        } else {
          alert('An unexpected error occurred.');
        }
      },

                }
            )
            
        }
            
    }
    
    callGetProfile()
    {
        var token = localStorage.getItem("token")
        const httpHeader = new HttpHeaders({
            'Authorization':`Bearer ${token}`
        })
        return this.http.get('https://dummyjson.com/auth/me',{headers:httpHeader});
        
    }

    callLoginAPI(user:UserLoginModel)
    {
        return this.http.post("https://dummyjson.com/auth/login",user);
    }
    logout(){
        this.usernameSubject.next(null);
    }
}