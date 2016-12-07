import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Doctor } from './doctor.model';
import { DoctorService } from './doctor.service';
import { EmitterService } from '../../ultilities/emitters.service';

@Component({
    selector: 'add-doctor',
    templateUrl: 'app/components/doctors/add-doctor.component.html',
    providers: [DoctorService]
})

export class AddDoctorComponent implements OnInit {
    private addDoctorForm: FormGroup;

    constructor(private doctorService: DoctorService, private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.addDoctorForm = this.formBuilder.group({
            Name: ['', [<any>Validators.required, <any>Validators.minLength(3)]]
        });
    }

    addDoctor(doctor: Doctor, isValid: boolean): void {
        if (isValid) {
            this.doctorService.saveDoctor(doctor)
                .subscribe(
                    response => {
                        EmitterService.get('added-doctor').emit('added-doctor');
                    }
                );
        }
    }
}


