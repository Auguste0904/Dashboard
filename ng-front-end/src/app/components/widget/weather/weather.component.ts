import { Component, OnInit, Input } from '@angular/core';
import { NetworkService } from '../../../services/network/network.service';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {

  @Input() data: any = null;
  forecast: any = null;
  math = Math;

  constructor(private networkService: NetworkService) { }

  ngOnInit(): void {
    this.update();
  }

  async update() {
    while (true) {
      this.networkService.getWeatherData(this.data.city).then((data) => {
        this.forecast = data;
      }).catch((error) => {
        console.error(error);
      });
      await new Promise( resolve => setTimeout(resolve, 600000) );
    }
  }

}
