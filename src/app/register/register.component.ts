import { Component, OnInit } from '@angular/core';
import { NewColonist, Job } from '../models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newColonist: NewColonist;
  marsJobs:Job[];

  constructor() { 
    // ToDo: Call API, get jobs.
      this.marsJobs = [
      {
        name:"pentapod",
        id:1,
        description:"Soldier"
      },
      {
        name:"heptapod",
        id:2,
        description:"Teacher"
      },{
        name:"octapod",
        id:3,
        description:"Farmer"
      },
      {
        name:"decapod",
        id:4,
        description:"King"
      }
    ]
  }
  ngOnInit() {
  
  }

}
