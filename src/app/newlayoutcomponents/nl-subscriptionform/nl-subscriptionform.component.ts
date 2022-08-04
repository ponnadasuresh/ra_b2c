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

  isSuccess= false;
  // isEnabled: boolean | undefined;
  isEnabled = true;
  signIn: string = "Proceed →";
  // isAddnewvehicleEnable: boolean | undefined;
  totalSteps = 4;
  steps: number = 0;
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
  // testMe(){
  //   alert('Hiii.......');
  //   this.signIn = 'Proceed';
  // }

  selectVehicle(v: any) {
    for (const x of this.vehiclesList) {
      Object.assign(x, {isSelect: false});
    }
    this.vehiclesList.filter((y: any) => v.id === y.id)[0].isSelect = true;
  }

  cancelAddvehicle(){
    this.VehiclesListenable = true;
    this.addVehiclesFormenable = false;  
    this.signIn = "Proceed →"  
  }


  addnewVehicle(){
    this.signIn = "Submit →"
this.VehiclesListenable = false;
this.addVehiclesFormenable = true;
this.submitNewVeh();

  }

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
    // if (this.signIn.match("Proceed")) {
    //   this.isEnabled = true;
    //   this.signIn = "Verification →";
    //   // this.steps++;

    // } else {
    //   this.steps++;
    //   this.signIn = 'Proceed →';
    //   this.isSuccess = true;

    // }
    this.isEnabled = true;
    this.signIn = "Verification →";
    this.steps = this.steps + 1;

    if(this.steps == 2){
      this.isEnabled = false;
      this.signIn = "Proceed →";
      this.steps++;
     console.log(this.steps);
    }


    // this.steps++;
    // this.steps++;
    console.log(this.steps);
 
  }

}



// let arr = [{num: 1, char: "a"}, {num: 2, char: "b"}];

// arr = [...arr,{num: 3, char: "c"}];

// //...arr --> spread operator
// console.log(arr);