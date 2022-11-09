import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable, startWith } from 'rxjs';
import { Detail } from '../detail';
import { EmployeedetailService } from '../service/employeedetail.service';

@Component({
  selector: 'app-table-value',
  templateUrl: './table-value.component.html',
  styleUrls: ['./table-value.component.css']
})
export class TableValueComponent implements OnInit {

  @ViewChild(MatSort) sort!:MatSort;

  public data:any;
  public dataSource!:MatTableDataSource<any>;
  public displayedColumns:string[]=["id","first_name","last_name","company_name","designation","email","address","phone_number","city","date"]

  public companyNameFormControl:any=new FormControl("");
  companyNameoptions!:Detail[];
  Finalcompanyname!:Observable<Detail[]>;

  public designationFormControl:any=new FormControl("");
  designationoptions!:Detail[];
  Finaldesignation!:Observable<Detail[]>;

  public cityFormControl:any=new FormControl("");
  cityoptions!:Detail[];
  finalcity!:Observable<Detail[]>;

  @ViewChild("paginator") paginator!:MatPaginator;

  public option:number[]=[2,5,10]

  constructor( public service:EmployeedetailService, ) {
  }

  ngOnInit(): void {
    this.postList();
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

    this.finalcity=this.cityFormControl.valueChanges.pipe(
      startWith(""),
      map(item=>{
        const city=item;
        return city?this._cityFilter(city as string):this.cityoptions;
      })
    )
  }

  postList():void{
    this.service.getData().subscribe({
      next:(data:any)=>{
        this.dataSource=new MatTableDataSource(data);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator=this.paginator;
        this.companyNameoptions=data;
        this.designationoptions=data;
        this.cityoptions=data;
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
    const filter=value;
    this.dataSource.filter=filter.trim().toLowerCase();
  }

  Selectedcity(value:any){
    const filter=value;
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

  private _cityFilter(name:string){
    const cityfilterValue=name.toLocaleLowerCase();
    return this.cityoptions.filter(option => option.city.toLocaleLowerCase().includes(cityfilterValue));
  }
  
  searchName(search:Event){
    const filter=(search.target as HTMLInputElement).value
    this.dataSource.filter=filter.trim().toLowerCase();
  }

  


}
