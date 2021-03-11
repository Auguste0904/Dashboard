import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { NetworkService } from 'src/app/services/network/network.service';
import { Router } from '@angular/router';

@Component({
  selector: 'covid-global-factory',
  templateUrl: './covid-global-factory.component.html',
  styleUrls: ['./covid-global-factory.component.css']
})
export class CovidGlobalFactoryComponent implements OnInit {

  constructor(private modalService: NgbModal, private networkService: NetworkService, private router: Router) { }

  ngOnInit(): void {
  }

  async open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(async (result) => {
      if (result == 'Validate') {
        let user = await window.sessionStorage.getItem('dashboard_user_hash');
        this.networkService.setWidgets({data: {type: "covid-global", result}, cookie: user, update: 300000}).then((data) => {
          this.router.navigate(["/"]);
        }).catch((error) => {
          console.log(error);
        });
      }
      // }
    }).catch((error) => {
      console.error(error);
    });
  }

}
