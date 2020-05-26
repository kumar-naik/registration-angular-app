import { RegistrationComponent } from './registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./user/add-user/add-user.component";
import {ListUserComponent} from "./user/list-user/list-user.component";
import {EditUserComponent} from "./user/edit-user/edit-user.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  {path : '', component : LoginComponent},

  {path : 'home',component:HomeComponent},
  {path : 'register',component:RegistrationComponent}
];

export const routing = RouterModule.forRoot(routes);
