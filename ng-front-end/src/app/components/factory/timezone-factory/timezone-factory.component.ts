import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { NetworkService } from 'src/app/services/network/network.service';
import { Router } from '@angular/router';

@Component({
  selector: 'timezone-factory',
  templateUrl: './timezone-factory.component.html',
  styleUrls: ['./timezone-factory.component.css']
})
export class TimezoneFactoryComponent implements OnInit {

  constructor(private modalService: NgbModal, private networkService: NetworkService, private router: Router) { }

  ngOnInit(): void {
  }

  async open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(async (result) => {
      if (result == 'Validate') {
        let user = await window.sessionStorage.getItem('dashboard_user_hash');
        this.networkService.setWidgets({data: {type: "time", timezone: "Europe/Paris"}, cookie: user, update: 300000}).then((data) => {
          console.log(data);
          this.router.navigate(["/"]);
        }).catch((error) => {
          console.log(error);
        });
      }
    }).catch((error) => {
      console.error(error);
    });
  }

}
