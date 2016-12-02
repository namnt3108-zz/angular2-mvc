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
var doctor_model_1 = require('./doctor.model');
var doctor_service_1 = require('./doctor.service');
var emitters_service_1 = require('../../ultilities/emitters.service');
var _ = require('lodash');
var DoctorListComponent = (function () {
    function DoctorListComponent(doctorService) {
        this.doctorService = doctorService;
    }
    DoctorListComponent.prototype.getDoctors = function () {
        var _this = this;
        var newDoctor = new doctor_model_1.Doctor();
        newDoctor.Id = 100;
        newDoctor.Name = 'Nam 100';
        this.doctorService.getDoctors().subscribe(function (doctors) { return _this.doctors = _.concat(doctors, newDoctor); });
    };
    DoctorListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDoctors();
        emitters_service_1.EmitterService.get('added-doctor').subscribe(function (reponse) { return _this.getDoctors(); });
    };
    DoctorListComponent.prototype.onSelect = function (doctor) {
        this.selectedDoctor = doctor;
    };
    DoctorListComponent = __decorate([
        core_1.Component({
            selector: 'doctor-list',
            templateUrl: 'app/components/doctors/doctor-list.component.html',
            providers: [doctor_service_1.DoctorService]
        }), 
        __metadata('design:paramtypes', [doctor_service_1.DoctorService])
    ], DoctorListComponent);
    return DoctorListComponent;
}());
exports.DoctorListComponent = DoctorListComponent;
//# sourceMappingURL=doctor-list.component.js.map