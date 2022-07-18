import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nl-subscriptionform',
  templateUrl: './nl-subscriptionform.component.html',
  styleUrls: ['./nl-subscriptionform.component.scss']
})
export class NlSubscriptionformComponent implements OnInit {

  constructor() { }

  isEnabled: boolean | undefined;
  signIn: string = "Proceed →";
  isAddnewvehicleEnable: boolean | undefined;

  totalSteps = 5;
  steps: number = 1


  ngOnInit(): void {
  }

  addnewVehicle(){
this.isAddnewvehicleEnable = true;
this.signIn = "Proceed →"
  }

  next() {
    // console.log(this.steps);
    if (this.signIn.match("Proceed")) {
      this.isEnabled = true;
      this.signIn = "Verification →"
    } else {
      this.steps++;

    }

  }

}
