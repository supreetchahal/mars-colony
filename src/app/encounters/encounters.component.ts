import { Component, OnInit } from '@angular/core';
import { ENCOUNTERS_URL } from '../models/api';
import { EncountersAPIService } from '../apiService/encounters';
import { Encounter } from '../models';


@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.css'],
  providers: [EncountersAPIService]
})
export class EncountersComponent implements OnInit {
  encounters:Encounter[];

  constructor(private encountersAPIService: EncountersAPIService) {
    this.getEncounters();
  }

  getEncounters(){
    this.encountersAPIService.getEncounters()
                            .subscribe((result) => {
                              console.log(result);                 
                              this.encounters = result;                        
                            })
  }

  ngOnInit() {
  }

}
