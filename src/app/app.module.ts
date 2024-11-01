import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { BackofficeComponent } from './pages/backoffice/backoffice.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { CustomersComponent } from './pages/backoffice/customers/customers.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'backoffice', component: BackofficeComponent, canActivate: [AuthGuard] },
  { path: 'backoffice/customers', component: CustomersComponent, canActivate: [AuthGuard] },
  { path: 'my-account', component: MyAccountComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations:
  [
    AppComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AuthModule,
    PagesModule,
    SharedModule
  ],
  providers:
  [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
    provideCharts(withDefaultRegisterables())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
