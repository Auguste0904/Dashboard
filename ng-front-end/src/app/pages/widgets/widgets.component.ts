import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../../services/network/network.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  constructor(private networkService: NetworkService, private router: Router) {
    this.authGuard();
  }

  async authGuard(): Promise<void> {
    let session = await window.sessionStorage.getItem('dashboard_user_hash');
    if (session === null || session === undefined || session.length === 0)
        this.router.navigate(["/login"]);
  }

  ngOnInit(): void {
  }

  goToAboutUs(): void {
    this.router.navigate(["/aboutUs"]);
  }

  goToTerms(): void {
    this.router.navigate(["/terms"]);
  }

  goToDashboard(): void {
    this.router.navigate(["/"]);
  }

}
