import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { combineAll, map, Observable, startWith } from 'rxjs';
import { Detail } from '../detail';
import { EmployeedetailService } from '../service/employeedetail.service';

@Component({
  selector: 'app-table-value',
  templateUrl: './table-value.component.html',
  styleUrls: ['./table-value.component.css']
})
export class TableValueComponent implements OnInit {

  public data:any;
  public dataSource!:MatTableDataSource<any>;
  public displayedColumns:string[]=["id","firstname","lastname","companyname","designation","email","address","phone","city","modified"]

  public companyNameFormControl:any=new FormControl("");
  companyNameoptions!:Detail[];
  Finalcompanyname!:Observable<Detail[]>;

  public designationFormControl:any=new FormControl("");
  designationoptions!:Detail[];
  Finaldesignation!:Observable<Detail[]>;



  @ViewChild("paginator") paginator!:MatPaginator;

  public option:number[]=[2,5,10]

  constructor( public service:EmployeedetailService, ) {
  }

  ngOnInit(): void {
    this.Finaldesignation=this.designationFormControl.valueChanges.pipe(
      startWith(""),
      map(item=>{
        const designation=item;
        return designation?this._degintaionfilter(designation as string):this.designationoptions
      })
    )
    this.Finalcompanyname=this.companyNameFormControl.valueChanges.pipe(
      startWith(""),
      map(item=>{
        const company_name=item;
        return company_name?this._CompanyNamefilter(company_name as string):this.companyNameoptions
      })
    )
    this.postList();
  }

  postList():void{
    this.service.getData().subscribe({
      next:(data:any)=>{
        this.companyNameoptions=data;
        this.designationoptions=data;
        this.dataSource=new MatTableDataSource(data);
        this.dataSource.paginator=this.paginator;
      },
      error:(error)=>{
        console.log(error);
      },
      complete:()=>{
        console.log("completed")
        // console.log(this.companyNameoptions);
      }
    });
  }

  Selectedcompanyname(value:any){
    const filter=value;
    this.dataSource.filter=filter.trim().toLowerCase();
  }
  Selecteddesignation(value:any){
    const filter=value
    this.dataSource.filter=filter.trim().toLowerCase();
  }

  private _CompanyNamefilter(name:string){
    const filterValue=name.toLocaleLowerCase();
    return this.companyNameoptions.filter(option => option.company_name.toLocaleLowerCase().includes(filterValue))
  }


  private _degintaionfilter(name:string){
    const designationfilterValue=name.toLocaleLowerCase();
    return this.designationoptions.filter(option => option.designation.toLocaleLowerCase().includes(designationfilterValue))
  }
  
  searchName(search:Event){
    const filter=(search.target as HTMLInputElement).value
    // console.log(filter);
    this.dataSource.filter=filter.trim().toLowerCase();
  }

  


}
