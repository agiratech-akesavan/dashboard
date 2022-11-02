import { NgModule } from '@angular/core';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatBadgeModule } from "@angular/material/badge";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';

const material=[
  MatGridListModule,
  MatButtonModule,
  MatInputModule,
  MatInputModule,
  MatIconModule,
  FlexLayoutModule,
  MatSidenavModule,
  MatCardModule,
  MatMenuModule,
  MatBadgeModule,
  MatDatepickerModule,
  MatNativeDateModule
]

@NgModule({
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
