import { Component, OnInit, Input } from '@angular/core';
import { NetworkService } from '../../../services/network/network.service';

@Component({
  selector: 'imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.css']
})
export class ImdbComponent implements OnInit {

  @Input() data: any = null;
  result = null;

  constructor(private networkService: NetworkService) { }

  ngOnInit(): void {
    this.networkService.getIMDb(this.data.title).then((data: any) => {
      console.log(data);
      this.result = JSON.parse(JSON.stringify(data));
    }).catch((error) => {
      console.error(error);
    });
  }

}
