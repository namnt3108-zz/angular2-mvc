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
var doctor_service_1 = require('./doctor.service');
var emitters_service_1 = require('../../ultilities/emitters.service');
var DoctorListComponent = (function () {
    function DoctorListComponent(doctorService) {
        this.doctorService = doctorService;
    }
    DoctorListComponent.prototype.getDoctors = function () {
        var _this = this;
        this.doctorService.getDoctors().subscribe(function (doctors) { return _this.doctors = doctors; });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdG9yLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvZG9jdG9ycy9kb2N0b3ItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwRSxlQUFlLENBQUMsQ0FBQTtBQUUxRiwrQkFBOEIsa0JBQWtCLENBQUMsQ0FBQTtBQUNqRCxpQ0FBK0IsbUNBQW1DLENBQUMsQ0FBQTtBQVNuRTtJQUlJLDZCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUFJLENBQUM7SUFFN0Msd0NBQVUsR0FBbEI7UUFBQSxpQkFFQztRQURHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQXRCLENBQXNCLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUFBLGlCQUdDO1FBRkcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLGlDQUFjLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE9BQVksSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFRCxzQ0FBUSxHQUFSLFVBQVMsTUFBYztRQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztJQUNqQyxDQUFDO0lBeEJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSxtREFBbUQ7WUFDaEUsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztTQUM3QixDQUFDOzsyQkFBQTtJQXFCRiwwQkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlksMkJBQW1CLHNCQWtCL0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkNoYW5nZXMsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb2N0b3IgfSBmcm9tICcuL2RvY3Rvci5tb2RlbCc7XHJcbmltcG9ydCB7IERvY3RvclNlcnZpY2UgfSBmcm9tICcuL2RvY3Rvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRW1pdHRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi91bHRpbGl0aWVzL2VtaXR0ZXJzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2RvY3Rvci1saXN0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvZG9jdG9ycy9kb2N0b3ItbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBwcm92aWRlcnM6IFtEb2N0b3JTZXJ2aWNlXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBEb2N0b3JMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByaXZhdGUgZG9jdG9yczogRG9jdG9yW107XHJcbiAgICBwcml2YXRlIHNlbGVjdGVkRG9jdG9yOiBEb2N0b3I7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkb2N0b3JTZXJ2aWNlOiBEb2N0b3JTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBwcml2YXRlIGdldERvY3RvcnMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kb2N0b3JTZXJ2aWNlLmdldERvY3RvcnMoKS5zdWJzY3JpYmUoZG9jdG9ycyA9PiB0aGlzLmRvY3RvcnMgPSBkb2N0b3JzKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdldERvY3RvcnMoKTtcclxuICAgICAgICBFbWl0dGVyU2VydmljZS5nZXQoJ2FkZGVkLWRvY3RvcicpLnN1YnNjcmliZSgocmVwb25zZTogYW55KSA9PiB0aGlzLmdldERvY3RvcnMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3QoZG9jdG9yOiBEb2N0b3IpOiB2b2lkIHsgICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZERvY3RvciA9IGRvY3RvcjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iXX0=