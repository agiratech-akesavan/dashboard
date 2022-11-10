import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { TableValueComponent } from './table-value/table-value.component';

const routes: Routes = [
  {path:"",redirectTo:"table",pathMatch:"full"},
  {path:"table",component:TableValueComponent},
  {path:"employee/:id",component:EmployeeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
