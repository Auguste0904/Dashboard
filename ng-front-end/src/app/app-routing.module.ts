import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { NewPasswordComponent } from './pages/new-password/new-password.component';
import { HomeComponent } from './pages/home/home.component';
import { TermsComponent } from './pages/terms/terms.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { WidgetsComponent } from './pages/widgets/widgets.component';
import { GoogleComponent } from './pages/oauth/google/google.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'forgotPassword', component: ForgotPasswordComponent},
  { path: 'newPassword', component: NewPasswordComponent},
  { path: 'terms', component: TermsComponent},
  { path: 'aboutUs', component: AboutUsComponent},
  { path: 'widgets', component: WidgetsComponent},
  { path: 'oauth/google', component: GoogleComponent, children: [
    {
      path: '**',
      component: GoogleComponent
    }
  ]},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
