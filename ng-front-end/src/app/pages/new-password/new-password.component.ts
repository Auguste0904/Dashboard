import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NetworkService } from '../../services/network/network.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-new-password',
    templateUrl: './new-password.component.html',
    styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

    passwordSet = true;
    confirmPasswordSet = true;
    errorSet = false;
    password = new FormControl();
    confirmPassword = new FormControl();

    constructor(private networkService: NetworkService, private router: Router) { }

    ngOnInit(): void {
    }

    newPassword(): void {
        this.errorSet = false;
        this.networkService.register({ password: this.password.value, confirmPassword: this.confirmPassword.value }).then(async (data: any) => {
            console.log(data);
            if (data.success === true) {
                this.router.navigate(["/login"]);
            }
        }).catch((error) => {
            console.log(error);
            this.errorSet = true;
        });
    }

}
