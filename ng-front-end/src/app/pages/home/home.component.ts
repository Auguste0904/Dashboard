import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../../services/network/network.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  widgets = [];

  constructor(private networkService: NetworkService, private router: Router) {
    this.authGuard();
  }

  async authGuard(): Promise<void> {
    let session = await window.sessionStorage.getItem('dashboard_user_hash');
    if (session === null || session === undefined || session.length === 0)
        this.router.navigate(["/login"]);
    else {
      this.retrieveData(session);
    }
  }

  async retrieveData(session_token: string): Promise<void> {
    this.networkService.getWidgets({cookie: session_token}).then((data: any) => {
      this.widgets = data.data;
    }).catch((error) => {
      console.error(error);
    });
  }

  // async weatherDatas() {
  //   this.networkService.getWeatherData(this.widgets)
  // }

  ngOnInit(): void {
  }

  goToAboutUs(): void {
    this.router.navigate(["/aboutUs"]);
  }

  goToTerms(): void {
    this.router.navigate(["/terms"]);
  }

  goToWidgets(): void {
    this.router.navigate(["/widgets"]);
  }

}
