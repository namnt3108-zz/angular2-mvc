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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var home_component_1 = require('../components/home/home.component');
var doctor_list_component_1 = require('../components/doctors/doctor-list.component');
var doctor_detail_component_1 = require('../components/doctors/doctor-detail.component');
var add_doctor_component_1 = require('../components/doctors/add-doctor.component');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9hcHAvbW9kdWxlcy9ob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLGlDQUE4QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzFELHNCQUFrRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ25FLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUUzQywrQkFBOEIsbUNBQW1DLENBQUMsQ0FBQTtBQUNsRSxzQ0FBb0MsNkNBQTZDLENBQUMsQ0FBQTtBQUNsRix3Q0FBc0MsK0NBQStDLENBQUMsQ0FBQTtBQUN0RixxQ0FBbUMsNENBQTRDLENBQUMsQ0FBQTtBQW1CaEY7SUFBQTtJQUEwQixDQUFDO0lBakIzQjtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxnQ0FBYTtnQkFDYixtQkFBVztnQkFDWCxpQkFBVTtnQkFDViwyQkFBbUI7YUFDdEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsOEJBQWE7Z0JBQ2IsMkNBQW1CO2dCQUNuQiwrQ0FBcUI7Z0JBQ3JCLHlDQUFrQjthQUNyQjtZQUNELFNBQVMsRUFBRTtnQkFDUCw4QkFBYTthQUNoQjtTQUNKLENBQUM7O2tCQUFBO0lBQ3dCLGlCQUFDO0FBQUQsQ0FBQyxBQUEzQixJQUEyQjtBQUFkLGtCQUFVLGFBQUksQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9jdG9yTGlzdENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZG9jdG9ycy9kb2N0b3ItbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9jdG9yRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9kb2N0b3JzL2RvY3Rvci1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZERvY3RvckNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZG9jdG9ycy9hZGQtZG9jdG9yLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBCcm93c2VyTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgSHR0cE1vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSBcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBEb2N0b3JMaXN0Q29tcG9uZW50LFxuICAgICAgICBEb2N0b3JEZXRhaWxDb21wb25lbnQsXG4gICAgICAgIEFkZERvY3RvckNvbXBvbmVudFxuICAgIF0sXG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEhvbWVDb21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUgeyB9XG4iXX0=