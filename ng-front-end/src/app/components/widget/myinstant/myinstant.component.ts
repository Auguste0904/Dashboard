import { Component, OnInit, Input } from '@angular/core';
import { NetworkService } from '../../../services/network/network.service';

@Component({
  selector: 'myinstant',
  templateUrl: './myinstant.component.html',
  styleUrls: ['./myinstant.component.css']
})
export class MyinstantComponent implements OnInit {

  @Input() data: any = null;


  constructor(private networkService: NetworkService) { }

  ngOnInit(): void {
    // console.log(this.data);
  }

  async play() {
    let audio = new Audio(this.data.audio);
    audio.play();
  }
}
