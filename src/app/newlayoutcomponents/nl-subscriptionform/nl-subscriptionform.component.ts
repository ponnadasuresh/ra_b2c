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
  cardactive =  false;
  VehiclesListenable = true;
  addVehiclesFormenable = false;
  vehiclemodel = 'Choose vehicle model'


  // Vehicles model list "Hero Xtreme 200S", "Hero Destini 125", "Hero Maestro Edge 125"
  vehiclesModelList: any = [
    {
      id:1,
      vehiclemodel: 'Hero Xtreme 200S',
    },
    {
      id:2,
      vehiclemodel: 'yamaha',
    },
    {
      id:3,
      vehiclemodel: ' Maestro Edge 125',
    },
    {
      id:4,
      vehiclemodel: 'Hero Xpulse 200T',
    },
  ];
  // Vehicles model


  // list of vehicles
  vehiclesList= [
    {
      id:1,
      vehiclename: 'Hero Splendor Plus',
      vehiclenumber: 'KA23',
      isSelect:false
    },
    {
      id:2,
      vehiclename: 'Hero Splendor Plus',
      vehiclenumber: 'KA23',
      isSelect:false
    },
    {
      id:3,
      vehiclename: 'Hero Splendor Plus',
      vehiclenumber: 'KA23',
      isSelect:false
    },
    {
      id:4,
      vehiclename: 'Hero Splendor Plus',
      vehiclenumber: 'KA23',
      isSelect:false
    },
  ]

  ngOnInit(): void {
  }

  selectVehicle(v: any) {
    for (const x of this.vehiclesList) {
      Object.assign(x, {isSelect: false});
    }
    this.vehiclesList.filter((y: any) => v.id === y.id)[0].isSelect = true;
  }

  addnewVehicle(){
this.isAddnewvehicleEnable = false;
this.VehiclesListenable = false;
this.addVehiclesFormenable = true;
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
