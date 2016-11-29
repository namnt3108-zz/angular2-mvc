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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdG9yLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvZG9jdG9ycy9kb2N0b3ItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwRSxlQUFlLENBQUMsQ0FBQTtBQUMxRiw2QkFBdUIsZ0JBQWdCLENBQUMsQ0FBQTtBQUN4QywrQkFBOEIsa0JBQWtCLENBQUMsQ0FBQTtBQUNqRCxpQ0FBK0IsbUNBQW1DLENBQUMsQ0FBQTtBQUNuRSxJQUFZLENBQUMsV0FBTSxRQUFRLENBQUMsQ0FBQTtBQVM1QjtJQUlJLDZCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUFJLENBQUM7SUFFN0Msd0NBQVUsR0FBbEI7UUFBQSxpQkFNQztRQUxHLElBQUksU0FBUyxHQUFHLElBQUkscUJBQU0sRUFBRSxDQUFDO1FBQzdCLFNBQVMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ25CLFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBRTNCLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQUEsaUJBR0M7UUFGRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsaUNBQWMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsT0FBWSxJQUFLLE9BQUEsS0FBSSxDQUFDLFVBQVUsRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVELHNDQUFRLEdBQVIsVUFBUyxNQUFjO1FBQ25CLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO0lBQ2pDLENBQUM7SUE1Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLG1EQUFtRDtZQUNoRSxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1NBQzdCLENBQUM7OzJCQUFBO0lBeUJGLDBCQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQztBQXRCWSwyQkFBbUIsc0JBc0IvQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uQ2hhbmdlcywgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvY3RvciB9IGZyb20gJy4vZG9jdG9yLm1vZGVsJztcclxuaW1wb3J0IHsgRG9jdG9yU2VydmljZSB9IGZyb20gJy4vZG9jdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFbWl0dGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3VsdGlsaXRpZXMvZW1pdHRlcnMuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkb2N0b3ItbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2RvY3RvcnMvZG9jdG9yLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbRG9jdG9yU2VydmljZV1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRG9jdG9yTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIGRvY3RvcnM6IERvY3RvcltdO1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZERvY3RvcjogRG9jdG9yO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9jdG9yU2VydmljZTogRG9jdG9yU2VydmljZSkgeyB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXREb2N0b3JzKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBuZXdEb2N0b3IgPSBuZXcgRG9jdG9yKCk7XHJcbiAgICAgICAgbmV3RG9jdG9yLklkID0gMTAwO1xyXG4gICAgICAgIG5ld0RvY3Rvci5OYW1lID0gJ05hbSAxMDAnO1xyXG5cclxuICAgICAgICB0aGlzLmRvY3RvclNlcnZpY2UuZ2V0RG9jdG9ycygpLnN1YnNjcmliZShkb2N0b3JzID0+IHRoaXMuZG9jdG9ycyA9IF8uY29uY2F0KGRvY3RvcnMsIG5ld0RvY3RvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ2V0RG9jdG9ycygpO1xyXG4gICAgICAgIEVtaXR0ZXJTZXJ2aWNlLmdldCgnYWRkZWQtZG9jdG9yJykuc3Vic2NyaWJlKChyZXBvbnNlOiBhbnkpID0+IHRoaXMuZ2V0RG9jdG9ycygpKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlbGVjdChkb2N0b3I6IERvY3Rvcik6IHZvaWQgeyAgICAgICAgICAgICBcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRG9jdG9yID0gZG9jdG9yO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ==