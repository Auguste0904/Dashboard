import { Component, OnInit, Input } from '@angular/core';
import { NetworkService } from '../../../services/network/network.service';

@Component({
  selector: 'covid-global',
  templateUrl: './covid-global.component.html',
  styleUrls: ['./covid-global.component.css']
})
export class CovidGlobalComponent implements OnInit {

  @Input() data: any = null;
  covid: any = null;

  constructor(private networkService: NetworkService) { }

  ngOnInit(): void {
    this.update();
  }

  async update() {
    while (true) {
      this.networkService.covid().then((data: any) => {
        this.covid = data.Global;
      }).catch((error) => {
        console.error(error);
      });
      await new Promise( resolve => setTimeout(resolve, 60000) );
    }
  }

}
