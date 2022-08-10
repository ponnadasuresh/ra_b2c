import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var window: any;
@Component({
  selector: 'app-nl-subscriptionform',
  templateUrl: './nl-subscriptionform.component.html',
  styleUrls: ['./nl-subscriptionform.component.scss']
})
export class NlSubscriptionformComponent implements OnInit {

  constructor() { }

  @ViewChild('exampleModal') myModal: any;


  subscriptionForm =  new FormGroup({
    mobileNumber: new FormControl('',Validators.required),
    otp: new FormControl('',Validators.required)
  })
  formModal: any;
  isSuccess= false;
  // isEnabled: boolean | undefined;
  isEnabled = true;
  signIn: string = "Proceed →";
  // isAddnewvehicleEnable: boolean | undefined;
  isActionBtn:boolean = true;
  steps: number = 0;
  cardactive =  false;
  VehiclesListenable = true;
  addVehiclesFormenable = false;

  vehiclebrand = '';
  vehiclemodel = ''
  vehicleReg = ''
  submitted:boolean=false;

  
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
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal'))
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
    this.signIn = "Proceed →"  
  }


  addnewVehicle(){
    this.signIn = "Submit →"
this.VehiclesListenable = false;
this.addVehiclesFormenable = true;
// this.submitNewVeh();
// this.steps=2;
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
    
    this.steps = this.steps + 1;
   
    if(this.steps == 1){
      this.signIn = "Verification →";
    }

    if(this.signIn == "Submit →"){
      this.steps=2;
      this.submitNewVeh();
    }

    if(this.steps == 2){
      this.isEnabled = false;
      this.signIn = "Proceed →";
      this.VehiclesListenable = true;
this.addVehiclesFormenable = false;
    }

    if(this.steps == 3 && this.signIn != "Submit →"){
      this.formModal.show();
      this.isActionBtn = false;
    }
   

    // this.steps++;
    // this.steps++;
    console.log(this.steps);
 
  }

  // test(){
  //   this.myModal.nativeElement.className = 'modal fade show';
  // }

}



// let arr = [{num: 1, char: "a"}, {num: 2, char: "b"}];

// arr = [...arr,{num: 3, char: "c"}];

// //...arr --> spread operator
// console.log(arr);