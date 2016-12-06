var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/http', '../components/home/home.component', '../components/doctors/doctor-list.component', '../components/doctors/doctor-detail.component', '../components/doctors/add-doctor.component'], function (require, exports, core_1, platform_browser_1, forms_1, http_1, home_component_1, doctor_list_component_1, doctor_detail_component_1, add_doctor_component_1) {
    "use strict";
    var HomeModule = (function () {
        function HomeModule() {
        }
        HomeModule = __decorate([
            core_1.NgModule({
                imports: [
                    platform_browser_1.BrowserModule,
                    forms_1.FormsModule,
                    http_1.HttpModule,
                    forms_1.ReactiveFormsModule
                ],
                declarations: [
                    home_component_1.HomeComponent,
                    doctor_list_component_1.DoctorListComponent,
                    doctor_detail_component_1.DoctorDetailComponent,
                    add_doctor_component_1.AddDoctorComponent
                ],
                bootstrap: [
                    home_component_1.HomeComponent
                ]
            }), 
            __metadata('design:paramtypes', [])
        ], HomeModule);
        return HomeModule;
    }());
    exports.HomeModule = HomeModule;
});
//# sourceMappingURL=home.module.js.map