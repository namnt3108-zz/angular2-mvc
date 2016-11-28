import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import { Doctor } from './doctor.model';
//import 'rxjs/add/operator/map';

@Injectable()

export class DoctorService {
    constructor(private http: Http) { }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

    private handleError(error: any): Observable<any> {
        let errorMsg = error.message || `Oh nooo! Server error!`
        console.error(errorMsg);

        // throw an application level error
        return Observable.throw(errorMsg);
    }

    getDoctors(): Observable<Doctor[]> {
        return this.http.get('doctor/doctors')
            .map(response => response.json() as Doctor[])
            .catch(this.handleError);
    }

    saveDoctor(doctor: Doctor): Observable<Response> {
        let url: string = 'doctor/new';
        if (doctor.Id != null) {
            url = 'doctor/edit'
        }

        return this.http.post(url, doctor)
            .map(response => response.json())
            .catch(this.handleError);
    }
}

