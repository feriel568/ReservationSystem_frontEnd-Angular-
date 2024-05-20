import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import {HomePageUserComponent} from './Components/home-page-user/home-page-user.component';
import { RegisterAdminComponent } from './Components/register-admin/register-admin.component';
import { LoginAdminComponent } from './Components/login-admin/login-admin.component';
import { HomePageAdminComponent } from './Components/home-page-admin/home-page-admin.component';
import { AddSalleComponent } from './Components/add-salle/add-salle.component';
import {ListeSallesComponent} from './Components/liste-salles/liste-salles.component';
import { UpdateSalleComponent } from './Components/update-salle/update-salle.component';
import { AllSallesUserComponent} from './Components/all-salles-user/all-salles-user.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: AllSallesUserComponent },
  { path: 'admin/register', component: RegisterAdminComponent },
  { path: 'admin/login', component: LoginAdminComponent },
  { path: 'admin/home', component: HomePageAdminComponent },
  { path: 'salle/add' , component:AddSalleComponent},
  { path: 'salle/admin/list' , component:ListeSallesComponent},
  { path: 'update-salle/:id', component: UpdateSalleComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
