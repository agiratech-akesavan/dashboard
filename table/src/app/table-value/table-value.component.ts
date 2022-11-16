import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable, startWith } from 'rxjs';
import { Detail } from '../detail';
import { EmployeedetailService } from '../service/employeedetail.service';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginatorIntl } from "@angular/material/paginator"
import { Router } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-table-value',
  templateUrl: './table-value.component.html',
  styleUrls: ['./table-value.component.css']
})
export class TableValueComponent extends MatPaginatorIntl implements OnInit {


  constructor( public service:EmployeedetailService,public route: Router,public renderer:Renderer2) {
    super();
    this.getAndInitTranslations();
  }


  public names:Array<any>=[];
  removeDuplicatesArrayById: Array<Detail> = [];
  removeDuplicateCity:Array<Detail>=[]
  removeDuplicateCompanyName:Array<Detail>=[];

  


  public data:any;
  public dataSource!:MatTableDataSource<any>;
  public displayedColumns:string[]=["e_id","first_name","last_name","company_name","designation","email","address","phone","city","detail"]

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
  @ViewChild(MatSort) sort!:MatSort;


  public pageSizeOptions:number[]=[2,5,10]
  pageEvent!: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  getAndInitTranslations(){
    this.itemsPerPageLabel = "Row :";
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
        this.names=data;
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{

        // console.log(this.designationoptions)
        // console.log("completed")
 

        this.removeDuplicatesArrayById = this.removeDuplicates(this.names, "designation")
        this.removeDuplicateCity=this.removeDuplicates(this.names,"city");
        this.removeDuplicateCompanyName=this.removeDuplicates(this.names,"company_name")
    
        this.designationoptions=this.removeDuplicatesArrayById;
        this.cityoptions=this.removeDuplicateCity;
        this.companyNameoptions=this.removeDuplicateCompanyName;  


       
        }
    });
  }


  Selected(value:any){
    this.dataSource.filter=value.trim().toLowerCase();
  }
  
  private _degintaionfilter(name:string){
    const designationfilterValue=name.toLocaleLowerCase();
    return this.designationoptions.filter(option => option.designation.toLocaleLowerCase().includes(designationfilterValue))
  }

  private _CompanyNamefilter(name:string){
    const filterValue=name.toLocaleLowerCase();
    return this.companyNameoptions.filter(option => option.company_name.toLocaleLowerCase().includes(filterValue))
  }


  private _cityFilter(name:string){
    const cityfilterValue=name.toLocaleLowerCase();
    return this.cityoptions.filter(option => option.city.toLocaleLowerCase().includes(cityfilterValue));
  }
  
  searchName(search:Event){
    const filter=(search.target as HTMLInputElement).value
    this.dataSource.filter=filter.trim().toLowerCase();
  }


  removeDuplicates(myArray:any, Prop:any) {
    return myArray.filter((obj:any, pos:any, arr:any) => {
      return arr.map((mapObj:any) => mapObj[Prop]).indexOf(obj[Prop]) === pos;
    });
  }


  employeedetail(value:any){
    this.route.navigate(["employee/",value])
  }

  edit(value:any){
    value.edit=true;
  }
  save(value:any){
    value.edit=false;
  }
  blur(value:any){
    value.edit=false;
    console.log("Working")
  }


}
