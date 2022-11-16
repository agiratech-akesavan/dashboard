import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  public navbars=["Home","Dashboard","My Reports","My Orders","Invoicing","Knowledge Base","Bulk Upload","Lab Support"]

  ngOnInit(): void {
  }

}
