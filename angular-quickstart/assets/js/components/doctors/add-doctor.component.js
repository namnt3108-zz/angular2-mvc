"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var doctor_service_1 = require('./doctor.service');
var emitters_service_1 = require('../../ultilities/emitters.service');
var AddDoctorComponent = (function () {
    function AddDoctorComponent(doctorService, formBuilder) {
        this.doctorService = doctorService;
        this.formBuilder = formBuilder;
    }
    AddDoctorComponent.prototype.ngOnInit = function () {
        this.addDoctorForm = this.formBuilder.group({
            Name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]]
        });
    };
    AddDoctorComponent.prototype.addDoctor = function (doctor, isValid) {
        if (isValid) {
            this.doctorService.saveDoctor(doctor)
                .subscribe(function (response) {
                emitters_service_1.EmitterService.get('added-doctor').emit('added-doctor');
            });
        }
    };
    AddDoctorComponent = __decorate([
        core_1.Component({
            selector: 'add-doctor',
            templateUrl: 'app/components/doctors/add-doctor.component.html',
            providers: [doctor_service_1.DoctorService]
        }), 
        __metadata('design:paramtypes', [doctor_service_1.DoctorService, forms_1.FormBuilder])
    ], AddDoctorComponent);
    return AddDoctorComponent;
}());
exports.AddDoctorComponent = AddDoctorComponent;
//# sourceMappingURL=add-doctor.component.js.map