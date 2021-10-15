import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './accout-components/login/login.component';
import { CreateNewComponentComponent } from './create-new-component/create-new-component.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { TooltipDateComponent } from './tooltip-date/tooltip-date.component';
import { HistoryCardComponent } from './history-card/history-card.component';
import { CreateCategorieComponent } from './modals/create-categorie/create-categorie.component';
import {MyInfoModalComponent} from './modals/my-info-modal/my-info-modal.component';

@NgModule({
  declarations: [
    LoginComponent,
		CreateNewComponentComponent,
    TooltipDateComponent,
    HistoryCardComponent,
    CreateCategorieComponent,
		MyInfoModalComponent,
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
