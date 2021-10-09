import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmountAccountsComponent } from './amount-accounts/amount-accounts.component';
import { ExpenseAccountComponent } from './expense-account/expense-account.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReportPageComponent } from './report-page/report-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'account', component: LoginPageComponent},
  {path:'perfil', component: UserProfileComponent},
  {path:'contasareceber', component: AmountAccountsComponent},
  {path:'contasapagar', component: ExpenseAccountComponent},
  {path:'relatorios', component: ReportPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
