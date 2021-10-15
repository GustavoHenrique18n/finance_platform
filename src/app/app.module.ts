import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './share/material/material.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AmountAccountsComponent } from './amount-accounts/amount-accounts.component';
import { ExpenseAccountComponent } from './expense-account/expense-account.component';
import { ComponentsModule } from './share/components.module';
import { ReportPageComponent } from './report-page/report-page.component';
import {StoreModule} from '@ngrx/store';
import {isLoggedUser} from './state/reducers/auth-reducer';
import {AuthGuardGuard} from './guards/auth-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    UserProfileComponent,
    AmountAccountsComponent,
    ExpenseAccountComponent,
    ReportPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    ComponentsModule,
    BrowserAnimationsModule,
	  StoreModule.forRoot({
      auth: isLoggedUser,
    })
  ],
  providers: [AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
