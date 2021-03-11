import { Component, OnInit, Input } from '@angular/core';
import { NetworkService } from '../../../services/network/network.service';

@Component({
  selector: 'drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.css']
})
export class DriveComponent implements OnInit {

  @Input() data: any = null;
  result = null;

  constructor(private networkService: NetworkService) { }

  ngOnInit(): void {
    this.networkService.driveInfo(this.data.id).then((data: any) => {
      console.log(data);
      this.result = JSON.parse(JSON.stringify(data));
    }).catch((error) => {
      console.error(error);
    });
  }

}
