import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NetworkService } from '../../services/network/network.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailSet = true;
  passwordSet = true;
  loginSet = false;
  errorSet = false;
  email = new FormControl();
  password = new FormControl();

  constructor(private networkService: NetworkService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.loginSet = false;
    this.errorSet = false;
    this.networkService.login({ email: this.email.value, password: this.password.value }).then(async (data: any) => {
      console.log(data);
      if (data.success === true) {
        await window.sessionStorage.setItem('dashboard_user_hash', data.cookie);
        this.router.navigate(["/"]);
      } else
        this.loginSet = true;
    }).catch((error) => {
      console.log(error);
      this.errorSet = true;
    });
  }

  google(): void {
    const clientId = "951068258463-38g3ha0q1jq3m5897mseet8q3943f037.apps.googleusercontent.com";
    const url = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}` +
      "&redirect_uri=http://localhost:4200/oauth/google" +
      "&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/drive" +
      "&response_type=token";
    window.location.href = url;
  }

}
