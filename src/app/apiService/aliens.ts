import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Alien } from '../models';
import { ALIENS_URL } from '../models/API';


@Injectable()
export class AliensAPIService {

    constructor(private http: Http){}

    getMarsJobs():Observable<Alien[]>{

    }

}
