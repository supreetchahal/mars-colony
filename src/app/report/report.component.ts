import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { NewEncounter, Alien, Colonist } from '../models';
import { Router } from '@angular/router';

import {RegisterComponent} from '../register/register.component';

import { REPORT_URL, ENCOUNTERS_URL } from '../models/API';
import { AliensAPIService } from '../apiService/aliens';
import { EncountersAPIService } from '../apiService/encounters';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [AliensAPIService, EncountersAPIService]
})
export class ReportComponent implements OnInit {
  newEncounter: NewEncounter;
  colonist: Colonist;
  aliens: Alien[];
  reportForm: FormGroup;
  clicked: boolean;


  constructor(
    private aliensApiService: AliensAPIService,
    private encountersApiService: EncountersAPIService,
    private router: Router) {
    
    this.getAliens();
    this.clicked = false;

    this.reportForm = new FormGroup ({
      atype: new FormControl('none', [Validators.required]),
      action: new FormControl('', [Validators.required, Validators.maxLength(200)])
    })

  }

  ngOnInit() {
  }

  getDate() {
    const date = new Date;
    var yy = date.getFullYear() + 1; // getMonth() is zero-based
    var mm = date.getMonth() + 1;
    var dt = date.getDate();

    return `${yy}-${mm}-${dt}`.toString();
 
  }

  postNewEncounter(event) {
    event.preventDefault();
    
    if(this.reportForm.invalid) {
      this.clicked = true;
     

    } else {
      const atype: string = this.reportForm.get('atype').value.toString();
      const action: string = this.reportForm.get('action').value.toString();
      const date: string = this.getDate().toString();
      const colonist_id: string = localStorage.getItem("colonist_id");


      const newEncounter: NewEncounter = new NewEncounter(atype, date, action, colonist_id);
      this.encountersApiService.saveNewEncounter({ encounter:newEncounter })
                             .subscribe((result) => {
                               this.router.navigate(['encounters'])
                             });
    }
  }

  getAliens() {
    this.aliensApiService.getAliens()
                       .subscribe((result) => {
                        this.aliens = result;
                       });    
  }

}