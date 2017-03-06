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

import { JOBS_URL, COLONIST_URL } from '../models/API';
import { ColonistAPIService } from '../apiService/colonist';
import { JobsAPIService } from '../apiService/jobs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ColonistAPIService, JobsAPIService]
})
export class RegisterComponent implements OnInit {


  marsJobs:Job[];
  registerForm: FormGroup;
  clickedButton: boolean;

  constructor(
    private ColonistApiService: ColonistAPIService,
    private router: Router,
    private jobsAPIService: JobsAPIService) { 
    this.getMarsJobs();

    this.clickedButton = false;

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
    this.jobsAPIService.getMarsJobs()
                        .subscribe((result) => {
                          this.marsJobs = result;
                        });
    
  }
  postNewColonist(event){

    
    event.preventDefault();
    this.clickedButton = true;
    if(this.registerForm.invalid){
      // The form is invalid...
      
      
    } else {
      const name = this.registerForm.get('name').value;
      const age = this.registerForm.get('age').value;
      const job_id = this.registerForm.get('job_id').value;

      const newColonist = new NewColonist(name, age, job_id);

      this.ColonistApiService.saveColonist( {colonist: newColonist} )
                              .subscribe((result) => {
                                console.log(result);
                                
                                localStorage.setItem('colonistID', result.id.toString());
                                this.router.navigate(['encounters'])        
                              });
      
    }
    
  }
}
