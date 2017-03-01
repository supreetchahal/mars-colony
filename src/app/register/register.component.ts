import { Component, OnInit } from '@angular/core';
import { NewColonist, Job } from '../models';
import { 
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newColonist: NewColonist;
  marsJobs:Job[];
  registerForm: FormGroup;

  constructor() { 
    // ToDo: Call API, get jobs.
      this.marsJobs = [
      {
        name:"Pentapod",
        id:1,
        description:"Soldier"
      },
      {
        name:"Heptapod",
        id:2,
        description:"Teacher"
      },{
        name:"Octapod",
        id:3,
        description:"Farmer"
      },
      {
        name:"Decapod",
        id:4,
        description:"King"
      }
    ];

    this.newColonist = new NewColonist('Mack','35','2');
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      age: new FormControl('', [Validators.required, this.acceptAge(18, 50)]),
      job_id: new FormControl('', [Validators.required]),
    });
  }

  acceptAge(min: number, max: number){
    return(control: AbstractControl): {[key: string]: any} => {
      if(control.value < 18 || control.value > 50){
        return{'Sorry Cant Go': { age: control.value }};
      }
    }
  }
  logColonist(){
    console.log(this.registerForm); 
  }
  ngOnInit() {
  
  }

}
