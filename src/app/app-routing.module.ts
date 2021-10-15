import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmountAccountsComponent } from './amount-accounts/amount-accounts.component';
import { ExpenseAccountComponent } from './expense-account/expense-account.component';
import {AuthGuardGuard} from './guards/auth-guard.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReportPageComponent } from './report-page/report-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'account', component: LoginPageComponent},
  {path:'perfil', component: UserProfileComponent,
		canActivate:[AuthGuardGuard]
	},
  {path:'contasareceber', component: AmountAccountsComponent,
		canActivate:[AuthGuardGuard]
	},
  {path:'contasapagar', component: ExpenseAccountComponent,
		canActivate:[AuthGuardGuard]
	},
  {path:'relatorios', component: ReportPageComponent,
		canActivate:[AuthGuardGuard]
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
