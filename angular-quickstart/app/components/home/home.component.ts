import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../components/doctors/doctor.model';

@Component({
    selector: 'app-home',
    templateUrl: 'app/components/home/home.component.html'
})

export class HomeComponent {
    private titleDoctors = 'Doctors';
    private titleAddDoctor = 'Add Doctor';
}
