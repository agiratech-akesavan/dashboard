import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"",redirectTo:"dashboard",pathMatch:"full"},
  {
    path:"login",
    loadChildren:()=>import("./login/login.module").then(m=>m.LoginModule),
    canActivate:[AuthGuard]
  },
  { 
    path:"dashboard", 
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivateChild:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
