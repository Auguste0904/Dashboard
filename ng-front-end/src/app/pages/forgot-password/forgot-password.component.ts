import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NetworkService } from '../../services/network/network.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit {
    emailSet = true;
    loginSet = false;
    errorSet = false;
    email = new FormControl();

    constructor(private networkService: NetworkService, private router: Router) { }

    ngOnInit(): void {
    }

    forgot(): void {
        this.loginSet = false;
        this.errorSet = false;
        this.networkService.register({ email: this.email.value }).then(async (data: any) => {
            console.log(data);
            if (data.success === true) {
                this.router.navigate(["/newPassword"]);
            } else
                this.loginSet = true;
        }).catch((error) => {
            console.log(error);
            this.errorSet = true;
        });
    }

}
