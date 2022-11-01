import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  public value=new BehaviorSubject<boolean>(true);
  
  constructor() { }
  
  sending(data:any){
    this.value.next(data);
  }

}
