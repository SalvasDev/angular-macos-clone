import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { SharedModule } from '../shared/shared.module';

import { DesktopComponent, LaunchpadComponent,TerminalComponent } from './containers';


const components = [
  DesktopComponent,
  DockComponent,
  LaunchpadComponent,
  MenuComponent
];
import {
  DockComponent,
  MenuComponent
 } from './components';

@NgModule({
  declarations: [
    ...components,
    DockComponent,
    MenuComponent,
    LaunchpadComponent,
    TerminalComponent
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    SharedModule
  ]
})
export class ApplicationsModule { }
