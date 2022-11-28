import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox"

const material=[
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatCheckboxModule
]

@NgModule({
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
