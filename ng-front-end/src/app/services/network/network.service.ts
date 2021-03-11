import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SERVERIP } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class NetworkService {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  };
  httpOptionsCors = {
    headers: new HttpHeaders({
      'Access-Control-Request-Headers': 'origin, x-requested-with'
    })
  };

  constructor(private httpClient: HttpClient) { }

  /*
  async post(body: any) {
    return await this.httpClient.post(`${SERVERIP}/`, body, this.httpOptions).toPromise();
  }

  async get(body: any) {
    return await this.httpClient.get(`${SERVERIP}/`, this.httpOptions).toPromise();
  }
  */

  async login(body: any) {
    return await this.httpClient.post(`${SERVERIP}/account/login`, body, this.httpOptions).toPromise();
  }

  async register(body: any) {
    return await this.httpClient.post(`${SERVERIP}/account/create`, body, this.httpOptions).toPromise();
  }

  async forgot(body: any) {
    return await this.httpClient.post(`${SERVERIP}/account/forgot`, body, this.httpOptions).toPromise();
  }

  async newPassword(body: any) {
    return await this.httpClient.post(`${SERVERIP}/account/newPassword`, body, this.httpOptions).toPromise();
  }

  async oauthGoogle(token: string) {
    return await this.httpClient.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`).toPromise();
  }

  async loginGoogle(body: any) {
    return await this.httpClient.post(`${SERVERIP}/account/loginGoogle`, body, this.httpOptions).toPromise();
  }
  
  async getWidgets(body: any) {
    return await this.httpClient.post(`${SERVERIP}/account/widgets`, body, this.httpOptions).toPromise();
  }

  async setWidgets(body: any) {
    return await this.httpClient.post(`${SERVERIP}/account/createWidget`, body, this.httpOptions).toPromise();
  }

  async myinstant(page: number) {
    return await this.httpClient.get(`https://cors-anywhere.herokuapp.com/http://www.myinstants.com/api/v1/instants/?format=json&page=${page}`).toPromise();
  }

  async getWeatherData(city: string) {
    return await this.httpClient.get(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=003de82c7de9c2ef270f20ebf0035f17`).toPromise();
  }

  async covid() {
    return await this.httpClient.get(`https://api.covid19api.com/summary`).toPromise();
  }

  async time(timezone) {
    return await this.httpClient.get(`https://cors-anywhere.herokuapp.com/http://worldtimeapi.org/api/timezone/${timezone}`).toPromise();
  }

  async timezone() {
    return await this.httpClient.get(`https://cors-anywhere.herokuapp.com/http://worldtimeapi.org/api/timezone`).toPromise();
  }

  async driveList() {
    let tok = await window.sessionStorage.getItem('dashboard_user_hash');
    let head = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${tok}`
      })
    };
    return await this.httpClient.get(`https://www.googleapis.com/drive/v3/files?key=951068258463-38g3ha0q1jq3m5897mseet8q3943f037.apps.googleusercontent.com`, head).toPromise();
  }

  async driveInfo(fileId) {
    let tok = await window.sessionStorage.getItem('dashboard_user_hash');
    let head = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${tok}`
      })
    };
    return await this.httpClient.get(`https://www.googleapis.com/drive/v3/files/${fileId}?key=951068258463-38g3ha0q1jq3m5897mseet8q3943f037.apps.googleusercontent.com&fields=*`, head).toPromise();
  }

  async getIMDb(title) {
    let head = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'x-rapidapi-key': `be6b6f6206mshf66d26fa755bb19p111c9cjsn10dbcdeef4c0`,
        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
      })
    };
    return await this.httpClient.get(`https://imdb8.p.rapidapi.com/title/get-details?tconst=${title}`, head).toPromise();
  }

}
