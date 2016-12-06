var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core'], function (require, exports, core_1) {
    "use strict";
    var ScheduleComponent = (function () {
        function ScheduleComponent() {
        }
        ScheduleComponent.prototype.ngOnInit = function () {
            this.events = [
                {
                    "title": "All Day Event",
                    "start": "2016-01-01"
                },
                {
                    "title": "Long Event",
                    "start": "2016-01-07",
                    "end": "2016-01-10"
                },
                {
                    "title": "Repeating Event",
                    "start": "2016-01-09T16:00:00"
                },
                {
                    "title": "Repeating Event",
                    "start": "2016-01-16T16:00:00"
                },
                {
                    "title": "Conference",
                    "start": "2016-01-11",
                    "end": "2016-01-13"
                }
            ];
            this.headerConfig = {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            };
        };
        ScheduleComponent = __decorate([
            core_1.Component({
                selector: 'app-schedule',
                template: "\n        <h1>Hello from Schedule Page</h1><br/><p-schedule [events]=\"events\" [header]=\"headerConfig\"></p-schedule>"
            }), 
            __metadata('design:paramtypes', [])
        ], ScheduleComponent);
        return ScheduleComponent;
    }());
    exports.ScheduleComponent = ScheduleComponent;
});
//# sourceMappingURL=schedule.component.js.map