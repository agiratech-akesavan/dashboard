import { NgModule } from '@angular/core';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card"

const material=[
  MatGridListModule,
  MatButtonModule,
  MatInputModule,
  MatInputModule,
  MatIconModule,
  FlexLayoutModule,
  MatSidenavModule,
  MatCardModule
]

@NgModule({
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
