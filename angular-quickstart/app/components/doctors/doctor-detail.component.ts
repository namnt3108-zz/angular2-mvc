import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from './doctor.model';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'doctor-detail',
  templateUrl: 'app/components/doctors/doctor-detail.component.html',
  providers: [DoctorService]
})

export class DoctorDetailComponent {
    @Input() doctor: Doctor;

    constructor(private doctorService: DoctorService) { } 

    editDoctor(): void {
        this.doctorService.saveDoctor(this.doctor).subscribe(response => console.log(response));
    }     
}


