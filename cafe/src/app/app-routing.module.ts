import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {MenuComponent} from "./components/menu/menu.component";
import {CheckComponent} from "./components/check/check.component";

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'check', component: CheckComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
