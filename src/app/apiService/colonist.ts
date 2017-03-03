import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Colonist, NewColonist } from '../models';
import { COLONISTS_URL } from '../models/API';

@Injectable()
export class ColonistAPIService {
    constructor(private http: Http){}


    saveColonist(NewColonist: NewColonist): Observable<Colonists> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(COLONISTS_URL, newColonist, { headers })
                        .map((res: Response) => res.json().encounter);
    }
}



