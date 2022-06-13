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

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['', Validators.required]
    })
  }
  login(){
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
