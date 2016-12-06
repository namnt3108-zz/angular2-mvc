import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScheduleComponent } from '../components/schedule/schedule.component';
import { ScheduleModule as CalendarModule } from 'primeng/components/schedule/schedule';

@NgModule({
    imports: [BrowserModule, CalendarModule],
    declarations: [ScheduleComponent],
    bootstrap: [ScheduleComponent]
})
export class ScheduleModule {
    
}
