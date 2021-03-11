import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetworkModule } from './services/network/network.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { NewPasswordComponent } from './pages/new-password/new-password.component';
import { HomeComponent } from './pages/home/home.component';
import { TermsComponent } from './pages/terms/terms.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { WidgetsComponent } from './pages/widgets/widgets.component';
import { TipsComponent } from './components/tips/tips.component';
import { GoogleComponent } from './pages/oauth/google/google.component';
import { WidgetComponent } from './components/widget/widget.component';
import { WeatherComponent } from './components/widget/weather/weather.component';
import { MyinstantsFactoryComponent } from './components/factory/myinstants-factory/myinstants-factory.component';
import { WeatherFactoryComponent } from './components/factory/weather-factory/weather-factory.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyinstantComponent } from './components/widget/myinstant/myinstant.component';
import { CovidTotalComponent } from './components/widget/covid-total/covid-total.component';
import { CovidTotalFactoryComponent } from './components/factory/covid-total-factory/covid-total-factory.component';
import { CovidGlobalComponent } from './components/widget/covid-global/covid-global.component';
import { CovidGlobalFactoryComponent } from './components/factory/covid-global-factory/covid-global-factory.component';
import { TimeFactoryComponent } from './components/factory/time-factory/time-factory.component';
import { TimeComponent } from './components/widget/time/time.component';
import { TimezoneComponent } from './components/widget/timezone/timezone.component';
import { TimezoneFactoryComponent } from './components/factory/timezone-factory/timezone-factory.component';
import { DriveFactoryComponent } from './components/factory/drive-factory/drive-factory.component';
import { DriveComponent } from './components/widget/drive/drive.component';
import { ImdbFactoryComponent } from './components/factory/imdb-factory/imdb-factory.component';
import { ImdbComponent } from './components/widget/imdb/imdb.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    NewPasswordComponent,
    TermsComponent,
    // AboutUsComponent,
    WidgetsComponent,
    TipsComponent,
    GoogleComponent,
    WidgetComponent,
    HomeComponent,
    WeatherComponent,
    MyinstantsFactoryComponent,
    WeatherFactoryComponent,
    MyinstantComponent,
    CovidTotalComponent,
    CovidTotalFactoryComponent,
    CovidGlobalComponent,
    CovidGlobalFactoryComponent,
    TimeFactoryComponent,
    TimeComponent,
    TimezoneComponent,
    TimezoneFactoryComponent,
    DriveFactoryComponent,
    DriveComponent,
    ImdbFactoryComponent,
    ImdbComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NetworkModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
