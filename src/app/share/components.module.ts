import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './accout-components/login/login.component';
import { CreateNewComponentComponent } from './create-new-component/create-new-component.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { TooltipDateComponent } from './tooltip-date/tooltip-date.component';
import { HistoryCardComponent } from './history-card/history-card.component';

@NgModule({
  declarations: [
    LoginComponent,
    CreateNewComponentComponent,
    TooltipDateComponent,
    HistoryCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports:[
    LoginComponent,
    CreateNewComponentComponent,
    TooltipDateComponent,
    HistoryCardComponent
  ]
})
export class ComponentsModule { }
