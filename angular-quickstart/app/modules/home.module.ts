import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeComponent } from '../components/home/home.component';
import { DoctorListComponent } from '../components/doctors/doctor-list.component';
import { DoctorDetailComponent } from '../components/doctors/doctor-detail.component';
import { AddDoctorComponent } from '../components/doctors/add-doctor.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule 
    ],
    declarations: [
        HomeComponent,
        DoctorListComponent,
        DoctorDetailComponent,
        AddDoctorComponent
    ],
    bootstrap: [
        HomeComponent
    ]
})
export class HomeModule { }
