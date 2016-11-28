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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWRvY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9kb2N0b3JzL2FkZC1kb2N0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0QsZUFBZSxDQUFDLENBQUE7QUFDL0Usc0JBQWdFLGdCQUFnQixDQUFDLENBQUE7QUFFakYsK0JBQThCLGtCQUFrQixDQUFDLENBQUE7QUFDakQsaUNBQStCLG1DQUFtQyxDQUFDLENBQUE7QUFRbkU7SUFHSSw0QkFBb0IsYUFBNEIsRUFBVSxXQUF3QjtRQUE5RCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQ2xGLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN4QyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBTSxrQkFBVSxDQUFDLFFBQVEsRUFBTyxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZFLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQ0FBUyxHQUFULFVBQVUsTUFBYyxFQUFFLE9BQWdCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7aUJBQ2hDLFNBQVMsQ0FDTixVQUFBLFFBQVE7Z0JBQ0osaUNBQWMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzVELENBQUMsQ0FDSixDQUFDO1FBQ1YsQ0FBQztJQUVMLENBQUM7SUE1Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLGtEQUFrRDtZQUMvRCxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1NBQzdCLENBQUM7OzBCQUFBO0lBeUJGLHlCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSwwQkFBa0IscUJBdUI5QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRG9jdG9yIH0gZnJvbSAnLi9kb2N0b3IubW9kZWwnO1xyXG5pbXBvcnQgeyBEb2N0b3JTZXJ2aWNlIH0gZnJvbSAnLi9kb2N0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEVtaXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWx0aWxpdGllcy9lbWl0dGVycy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhZGQtZG9jdG9yJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvZG9jdG9ycy9hZGQtZG9jdG9yLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHByb3ZpZGVyczogW0RvY3RvclNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWRkRG9jdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByaXZhdGUgYWRkRG9jdG9yRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9jdG9yU2VydmljZTogRG9jdG9yU2VydmljZSwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFkZERvY3RvckZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgTmFtZTogWycnLCBbPGFueT5WYWxpZGF0b3JzLnJlcXVpcmVkLCA8YW55PlZhbGlkYXRvcnMubWluTGVuZ3RoKDMpXV1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGREb2N0b3IoZG9jdG9yOiBEb2N0b3IsIGlzVmFsaWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBpZiAoaXNWYWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLmRvY3RvclNlcnZpY2Uuc2F2ZURvY3Rvcihkb2N0b3IpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRW1pdHRlclNlcnZpY2UuZ2V0KCdhZGRlZC1kb2N0b3InKS5lbWl0KCdhZGRlZC1kb2N0b3InKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0=