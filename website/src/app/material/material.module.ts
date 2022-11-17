import { NgModule } from '@angular/core';
import { MatToolbarModule }  from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button"
import { MatInputModule } from "@angular/material/input"

const material=[
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule
]


@NgModule({
  imports: [material],
  exports:[material],
})
export class MaterialModule { }
