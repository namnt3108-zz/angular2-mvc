var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core', '@angular/platform-browser', '../components/schedule/schedule.component', 'primeng/components/schedule/schedule'], function (require, exports, core_1, platform_browser_1, schedule_component_1, schedule_1) {
    "use strict";
    var ScheduleModule = (function () {
        function ScheduleModule() {
        }
        ScheduleModule = __decorate([
            core_1.NgModule({
                imports: [platform_browser_1.BrowserModule, schedule_1.ScheduleModule],
                declarations: [schedule_component_1.ScheduleComponent],
                bootstrap: [schedule_component_1.ScheduleComponent]
            }), 
            __metadata('design:paramtypes', [])
        ], ScheduleModule);
        return ScheduleModule;
    }());
    exports.ScheduleModule = ScheduleModule;
});
//# sourceMappingURL=schedule.module.js.map