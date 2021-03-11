import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network/network.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  constructor(private networkService: NetworkService, private router: Router) {
    console.log(window.location.href);
    const url = new URL(window.location.href);
    let hashes: any = url.hash.replace("#", "").split('&').reduce((params, hash) => {
      let [key, val] = hash.split('=')
      return Object.assign(params, { [key]: decodeURIComponent(val) })
    }, {});
    console.log(hashes);
    this.networkService.oauthGoogle(hashes.access_token).then(async (dataGoogle: any) => {
      this.networkService.loginGoogle({ email: dataGoogle.email, cookie: hashes.access_token }).then(async (data) => {
        console.log(data);
        await window.sessionStorage.setItem('dashboard_user_hash', hashes.access_token);
        this.router.navigate(["/"]);
      }).catch((error) => {
        console.log(error);
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  ngOnInit(): void {
  }

}
