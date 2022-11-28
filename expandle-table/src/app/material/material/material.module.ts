import { NgModule } from '@angular/core';
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button"

const material=[
  MatTableModule,
  MatIconModule,
  MatButtonModule
]
@NgModule({
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
