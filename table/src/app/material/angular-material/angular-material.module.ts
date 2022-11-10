import { NgModule } from '@angular/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import  { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort"


const material=[
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
]  

@NgModule({
  imports: [material],
  exports:[material]
})
export class AngularMaterialModule { }
