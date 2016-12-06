import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-schedule',
    template: `
        <h1>Hello from Schedule Page</h1><br/><p-schedule [events]="events" [header]="headerConfig"></p-schedule>`
})
export class ScheduleComponent implements OnInit {
    events: any[];
    headerConfig: any;

    ngOnInit() {
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
    }
}
