import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NetworkService } from '../../services/network/network.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    emailSet = true;
    passwordSet = true;
    confirmPasswordSet = true;
    loginSet = false;
    errorSet = false;
    email = new FormControl();
    password = new FormControl();
    confirmPassword = new FormControl();

    constructor(private networkService: NetworkService, private router: Router) { }

    ngOnInit(): void {
    }

    register(): void {
        this.loginSet = false;
        this.errorSet = false;
        this.networkService.register({ email: this.email.value, password: this.password.value, confirmPassword: this.confirmPassword.value }).then(async (data: any) => {
            console.log(data);
            if (data.success === true) {
                this.router.navigate(["/login"]);
            } else
                this.loginSet = true;
        }).catch((error) => {
            console.log(error);
            this.errorSet = true;
        });
    }

}
