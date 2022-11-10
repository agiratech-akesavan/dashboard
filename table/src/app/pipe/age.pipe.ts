import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  public dob:any;
  public today:any=new Date();

  transform(value:any){
    let dob = (value);
    let day = Number(dob.substr(0, 2));
    let month=Number(dob.substr(3,2)-1);
    let year = Number(dob.substr(6, 4));
    let today = new Date();
    let age = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
      age--;
    }

    return age;

  }

}
