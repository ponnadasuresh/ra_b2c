import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-nl-subscriptionform',
  templateUrl: './nl-subscriptionform.component.html',
  styleUrls: ['./nl-subscriptionform.component.scss']
})
export class NlSubscriptionformComponent implements OnInit {

  constructor() { }

  subscriptionForm =  new FormGroup({
    mobileNumber: new FormControl('',Validators.required),
    otp: new FormControl('',Validators.required)
  })


  isEnabled: boolean | undefined;
  signIn: string = "Proceed →";
  // isAddnewvehicleEnable: boolean | undefined;
  totalSteps = 5;
  steps: number = 1
  cardactive =  false;
  VehiclesListenable = true;
  addVehiclesFormenable = false;

  vehiclebrand = '';
  vehiclemodel = ''
  vehicleReg = ''
  

  
  vehiclesList= [
    {
      id:1,
      vehiclebrand: 'Hero Splendor Plus',
      vehiclemodel: 'Hero Splendor Plus',
      vehicleRegNo: 'KA23',
      isSelect:false
    },
    {
      id:2,
      vehiclebrand: 'Hero Splendor Plus',
      vehiclemodel: 'Hero Splendor Plus',
      vehicleRegNo: 'KA23',
      isSelect:false
    },
    {
      id:3,
      vehiclebrand: 'Hero Splendor Plus',
      vehiclemodel: 'Hero Splendor Plus',
      vehicleRegNo: 'KA23',
      isSelect:false
    },
    {
      id:4,
      vehiclebrand: 'Hero Splendor Plus',
      vehiclemodel: 'Hero Splendor Plus',
      vehicleRegNo: 'KA23',
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

  cancelAddvehicle(){
    this.VehiclesListenable = true;
    this.addVehiclesFormenable = false;    
  }


  addnewVehicle(){
this.VehiclesListenable = false;
this.addVehiclesFormenable = true;
this.signIn = "Proceed →"
  }

// new vehicle
submitNewVeh(){
  // vehiclebrand = '';
  // vehiclemodel = ''


  // vehiclebrand = '';
  // vehiclemodel = ''
  // vehicleRegNo = ''

  this.vehiclesList.push({
    vehiclebrand: this.vehiclebrand,
    vehicleRegNo: this.vehicleReg,
    isSelect: false,
    vehiclemodel: 'Hero Splendor Plus',
    id: this.vehiclesList.length + 1,
  })

  console.log(this.vehiclesList);


}



  next() {
    console.log(this.steps);
    if (this.signIn.match("Proceed")) {
      this.isEnabled = true;
      this.signIn = "Verification →"
    } else {
      this.steps++;
      this.signIn = "Proceed →"
    }

  }

}



// let arr = [{num: 1, char: "a"}, {num: 2, char: "b"}];

// arr = [...arr,{num: 3, char: "c"}];

// //...arr --> spread operator
// console.log(arr);