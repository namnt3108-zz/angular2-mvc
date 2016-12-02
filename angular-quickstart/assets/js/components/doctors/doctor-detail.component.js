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
var DoctorDetailComponent = (function () {
    function DoctorDetailComponent(doctorService) {
        this.doctorService = doctorService;
    }
    DoctorDetailComponent.prototype.editDoctor = function () {
        this.doctorService.saveDoctor(this.doctor).subscribe(function (response) { return console.log(response); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', doctor_model_1.Doctor)
    ], DoctorDetailComponent.prototype, "doctor", void 0);
    DoctorDetailComponent = __decorate([
        core_1.Component({
            selector: 'doctor-detail',
            templateUrl: 'app/components/doctors/doctor-detail.component.html',
            providers: [doctor_service_1.DoctorService]
        }), 
        __metadata('design:paramtypes', [doctor_service_1.DoctorService])
    ], DoctorDetailComponent);
    return DoctorDetailComponent;
}());
exports.DoctorDetailComponent = DoctorDetailComponent;
//# sourceMappingURL=doctor-detail.component.js.map