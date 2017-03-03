import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { NewEncounter } from '../models';
import { ENCOUNTERS_URL } from '../models/API';

interface EncounterPostRequest {
    encounter: NewEncounter;
}


@Injectable()
export class EncountersAPIService {

    constructor(private http: Http){}

    getMarsJobs():Observable<Encounter[]>{

    }

    saveNewEncounter(newEncounter: EncounterPostRequest) : Observable<Encounter>

}
