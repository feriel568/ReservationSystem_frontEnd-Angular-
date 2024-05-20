import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this import
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './Services/auth.service';
import { HomePageUserComponent } from './Components/home-page-user/home-page-user.component';
import { LoginAdminComponent } from './Components/login-admin/login-admin.component';
import { RegisterAdminComponent } from './Components/register-admin/register-admin.component';
import { HomePageAdminComponent } from './Components/home-page-admin/home-page-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AddSalleComponent } from './Components/add-salle/add-salle.component';
import { ListeSallesComponent } from './Components/liste-salles/liste-salles.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { UpdateSalleComponent } from './Components/update-salle/update-salle.component';
import { AllSallesUserComponent } from './Components/all-salles-user/all-salles-user.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomePageUserComponent,
    LoginAdminComponent,
    RegisterAdminComponent,
    HomePageAdminComponent,
    AddSalleComponent,
    ListeSallesComponent,
    UpdateSalleComponent,
    AllSallesUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add this
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ToastrModule.forRoot({
      timeOut: 3000, 
      positionClass: 'toast-top-right', 
      preventDuplicates: true,
      progressBar: true,
      closeButton: true,
      enableHtml: true,
      toastClass: 'custom-toast'
    })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
