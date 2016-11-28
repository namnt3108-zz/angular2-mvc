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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdG9yLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9kb2N0b3JzL2RvY3Rvci1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUMsZUFBZSxDQUFDLENBQUE7QUFDekQsNkJBQXVCLGdCQUFnQixDQUFDLENBQUE7QUFDeEMsK0JBQThCLGtCQUFrQixDQUFDLENBQUE7QUFRakQ7SUFHSSwrQkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBSSxDQUFDO0lBRXJELDBDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFORDtRQUFDLFlBQUssRUFBRTs7eURBQUE7SUFQWjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUscURBQXFEO1lBQ2xFLFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7U0FDM0IsQ0FBQzs7NkJBQUE7SUFVRiw0QkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksNkJBQXFCLHdCQVFqQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvY3RvciB9IGZyb20gJy4vZG9jdG9yLm1vZGVsJztcclxuaW1wb3J0IHsgRG9jdG9yU2VydmljZSB9IGZyb20gJy4vZG9jdG9yLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkb2N0b3ItZGV0YWlsJyxcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2RvY3RvcnMvZG9jdG9yLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbRG9jdG9yU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEb2N0b3JEZXRhaWxDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgZG9jdG9yOiBEb2N0b3I7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkb2N0b3JTZXJ2aWNlOiBEb2N0b3JTZXJ2aWNlKSB7IH0gXHJcblxyXG4gICAgZWRpdERvY3RvcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRvY3RvclNlcnZpY2Uuc2F2ZURvY3Rvcih0aGlzLmRvY3Rvcikuc3Vic2NyaWJlKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSk7XHJcbiAgICB9ICAgICBcclxufVxyXG5cclxuXHJcbiJdfQ==