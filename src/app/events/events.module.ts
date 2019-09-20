import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { EventsComponent } from './components/events/events.component';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
  declarations: [EventsComponent],
  imports: [
    SharedModule,
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
