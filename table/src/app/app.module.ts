import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableValueComponent } from './table-value/table-value.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material/angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorIntl } from "@angular/material/paginator";
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { AgePipe } from './pipe/age.pipe';
import { EditDialogComponent } from './dialog/edit-dialog/edit-dialog.component';
import { WebcamModule } from 'ngx-webcam';


@NgModule({
  declarations: [
    AppComponent,
    TableValueComponent,
    EmployeeDetailComponent,
    AgePipe,
    EditDialogComponent
  ],
  entryComponents:[EditDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    WebcamModule 
  ],
  providers: [
    {
      provide: MatPaginatorIntl, 
      useClass: TableValueComponent
    }
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
