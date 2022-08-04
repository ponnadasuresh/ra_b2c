import { Component, OnInit } from '@angular/core';
declare var window: any;
@Component({
  selector: 'app-nl-subscription-conformation',
  templateUrl: './nl-subscription-conformation.component.html',
  styleUrls: ['./nl-subscription-conformation.component.scss']
})
export class NlSubscriptionConformationComponent implements OnInit {

  constructor() { }

  formModal: any;

  openFormModal() {
    this.formModal.show();
  }
  saveSomeThing() {
    // confirm or save something
    this.formModal.hide();
  }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal'))
  }

}
