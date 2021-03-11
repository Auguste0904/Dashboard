import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { NetworkService } from 'src/app/services/network/network.service';
import { Router } from '@angular/router';

@Component({
  selector: 'covid-total-factory',
  templateUrl: './covid-total-factory.component.html',
  styleUrls: ['./covid-total-factory.component.css']
})
export class CovidTotalFactoryComponent implements OnInit {

  data = [];

  constructor(private modalService: NgbModal, private networkService: NetworkService, private router: Router) { }

  ngOnInit(): void {
  }

  async open(content: any) {
    this.networkService.covid().then((data: any) => {
      this.data = data;
    }).catch((error) => {
      console.error(error);
    })
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(async (result) => {
        let user = await window.sessionStorage.getItem('dashboard_user_hash');
        this.networkService.setWidgets({data: {type: "covid", result}, cookie: user, update: 300000}).then((data) => {
          console.log(data);
          this.router.navigate(["/"]);
        }).catch((error) => {
          console.log(error);
        });
      // }
    }).catch((error) => {
      console.error(error);
    });
  }


}
