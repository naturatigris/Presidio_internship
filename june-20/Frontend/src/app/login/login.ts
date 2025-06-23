import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule,FormGroup,FormBuilder, Validators,ReactiveFormsModule} from '@angular/forms';
import { UserLogin } from '../models/userlogin';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterModule,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
      userForm: FormGroup;
      token:string|null=null;
      auth:UserLogin={
        Email:'',
        Password:''
      }
      constructor(private fb:FormBuilder,private authservice:AuthService,private router:Router){
        this.userForm=this.fb.group({
          email:['',Validators.required],
          password:['',Validators.required]

        })
      }
      onSubmit(){
            if (this.userForm.valid) {
    const formValue = this.userForm.value;
    this.auth.Email = formValue.email;
    this.auth.Password = formValue.password;

        this.authservice.login(this.auth).subscribe({
          next: res => {
            if (res=='Login Successfull')
                alert('Login successful');

              this.token=localStorage.getItem('token')
              if (this.token)
                this.router.navigate(['/dashboard']);

          },
          error: err => {
            console.error('Registration failed', err)
            alert('Login failed.InValid EmailId or Password.');
          }
            });
      }else{
              this.userForm.markAllAsTouched();

      }
    }

}
