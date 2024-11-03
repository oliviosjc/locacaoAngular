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
import { RentalComponent } from './pages/rental/rental.component';
import { BrandsComponent } from './pages/backoffice/brands/brands.component';
import { CategoriesComponent } from './pages/backoffice/categories/categories.component';
import { ModelsComponent } from './pages/backoffice/models/models.component';
import { MaintenancesComponent } from './pages/backoffice/maintenances/maintenances.component';
import { UsersComponent } from './pages/backoffice/users/users.component';
import { TransportComponent } from './pages/backoffice/transport/transport.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'backoffice', component: BackofficeComponent, canActivate: [AuthGuard] },
  { path: 'backoffice/customers', component: CustomersComponent, canActivate: [AuthGuard] },
  { path: 'backoffice/brands', component: BrandsComponent, canActivate: [AuthGuard] },
  { path: 'backoffice/categories', component: CategoriesComponent, canActivate: [AuthGuard] },
  { path: 'backoffice/models', component: ModelsComponent, canActivate: [AuthGuard] },
  { path: 'backoffice/maintenances', component: MaintenancesComponent, canActivate: [AuthGuard] },
  { path: 'backoffice/users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'backoffice/transport', component: TransportComponent, canActivate: [AuthGuard] },
  { path: 'my-account', component: MyAccountComponent, canActivate: [AuthGuard] },
  { path: 'rental', component: RentalComponent, canActivate: [AuthGuard] }
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
