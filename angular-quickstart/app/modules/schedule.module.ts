import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScheduleComponent } from '../components/schedule/schedule.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [ScheduleComponent],
    bootstrap: [ScheduleComponent]
})
export class ScheduleModule {
    
}
