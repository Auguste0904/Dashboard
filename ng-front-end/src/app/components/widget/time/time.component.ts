import { Component, OnInit, Input } from '@angular/core';
import { NetworkService } from '../../../services/network/network.service';

@Component({
  selector: 'time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  @Input() data: any = null;
  time: any = null;

  constructor(private networkService: NetworkService) { }

  ngOnInit(): void {
    this.update();
  }

  async update() {
    while (true) {
      this.networkService.time(this.data.timezone).then((data: any) => {
        this.time = data;
      }).catch((error) => {
        console.error(error);
      });
      await new Promise( resolve => setTimeout(resolve, 5000) );
    }
  }

}
