import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Doctor } from './doctor.model';
import { DoctorService } from './doctor.service';
import { EmitterService } from '../../ultilities/emitters.service';

@Component({
    selector: 'doctor-list',
    templateUrl: 'app/components/doctors/doctor-list.component.html',
    providers: [DoctorService]
})


export class DoctorListComponent implements OnInit {
    private doctors: Doctor[];
    private selectedDoctor: Doctor;

    constructor(private doctorService: DoctorService) { }

    private getDoctors(): void {
        this.doctorService.getDoctors().subscribe(doctors => this.doctors = doctors);
    }

    ngOnInit(): void {
        this.getDoctors();
        EmitterService.get('added-doctor').subscribe((reponse: any) => this.getDoctors());
    }

    onSelect(doctor: Doctor): void {             
        this.selectedDoctor = doctor;
    }
}



