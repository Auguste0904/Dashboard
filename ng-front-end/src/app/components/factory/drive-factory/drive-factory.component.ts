import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { NetworkService } from 'src/app/services/network/network.service';
import { Router } from '@angular/router';

@Component({
  selector: 'drive-factory',
  templateUrl: './drive-factory.component.html',
  styleUrls: ['./drive-factory.component.css']
})
export class DriveFactoryComponent implements OnInit {

  files: Array<any> = [];

  constructor(private modalService: NgbModal, private networkService: NetworkService, private router: Router) { }

  ngOnInit(): void {
  }

  async open(content: any) {
    this.networkService.driveList().then((data: any) => {
      this.files = data.files;
    }).catch((error) => {
      console.error(error);
    });
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(async (result) => {
      let user = await window.sessionStorage.getItem('dashboard_user_hash');
      this.networkService.setWidgets({ data: { type: "drive", name: result.name, id: result.id }, cookie: user, update: 300000 }).then((data) => {
        console.log(data);
        this.router.navigate(["/"]);
      }).catch((error) => {
        console.log(error);
      });
    }).catch((error) => {
      console.error(error);
    });
  }

}
