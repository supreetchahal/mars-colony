import { Component, OnInit } from '@angular/core';
import { NewColonist, Job } from '../models';
import { JOBS_URL, COLONISTS_URL } from '../models/API';
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


  marsJobs:Job[];
  registerForm: FormGroup;
  clickedButton: boolean;

  constructor() { 
    this.getMarsJobs();

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

  ngOnInit() {
  
  }
  getMarsJobs(){
    console.log('Getting jobs ...');
    
  }
  postNewColonist(event){
    event.preventDefault();
    if(this.registerForm.invalid){
      // The form is invalid...
      console.log('Form is ivalid');
      
    } else {
      const name = this.registerForm.get('name').value;
      const age = this.registerForm.get('age').value;
      const job_id = this.registerForm.get('job_id').value;

      const newColonist = new NewColonist(name, age, job_id);
      console.log('The Colonist is ready for MARS:', newColonist);
      
    }
    
  }
}
