import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirstRoutingModule} from './first-routing.module';
import {FirstComponent} from './first.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FirstRoutingModule,
    SharedModule
  ],
  declarations: [FirstComponent]
})
export class FirstModule {
}
