import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { NetworkService } from 'src/app/services/network/network.service';
import { Router } from '@angular/router';

@Component({
  selector: 'myinstants-factory',
  templateUrl: './myinstants-factory.component.html',
  styleUrls: ['./myinstants-factory.component.css']
})
export class MyinstantsFactoryComponent implements OnInit {

  page = 1;
  data = [];

  constructor(private modalService: NgbModal, private networkService: NetworkService, private router: Router) { }

  ngOnInit(): void {
  }

  async nextPage() {
    this.page += 1;
    this.networkService.myinstant(this.page).then((data: any) => {
      console.log(data);
      this.data = data.results;
    }).catch((error) => {
      console.error(error);
    })
  }

  async open(content: any) {
    this.page = 1;
    this.networkService.myinstant(this.page).then((data: any) => {
      console.log(data);
      this.data = data.results;
    }).catch((error) => {
      console.error(error);
    })
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(async (result) => {
      // console.log("Close", result);
      // if (result == typeof(Object)) {
        let user = await window.sessionStorage.getItem('dashboard_user_hash');
        this.networkService.setWidgets({data: {type: "myinstant", name: result.name, audio: result.sound}, cookie: user, update: 300000}).then((data) => {
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
