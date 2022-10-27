import { NgModule } from '@angular/core';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { FlexLayoutModule } from "@angular/flex-layout"

const material=[
  MatGridListModule,
  MatButtonModule,
  MatInputModule,
  MatInputModule,
  MatIconModule,
  FlexLayoutModule
]

@NgModule({
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
