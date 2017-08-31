import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SecondComponent} from './second.component';
import {SecondRoutingModule} from './second-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SecondRoutingModule,
    SharedModule
  ],
  declarations: [SecondComponent]
})
export class SecondModule {
}
