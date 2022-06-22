import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup

  constructor(private formbuilder: FormBuilder,private http: HttpClient, private router: Router) { }
  public passwordPattern: string = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{6,}$';

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(this.passwordPattern)]]
    })
  }
  login(){
    if(this.loginForm.invalid) {
      return;
    }
    this.http.get<any>("https://fakestoreapi.com/users")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        if (a.email === this.loginForm.value.email && a.password === this.loginForm.value.password) {
          return a;
        }
      });
      if(user){
        alert('Login Succesful');
        localStorage.setItem('token', user.id);
        this.loginForm.reset()
        this.router.navigate([""])
      }else{
        alert("user not found")
      }
    },err=>{
      alert("Something went wrong")
    })
  }
}
