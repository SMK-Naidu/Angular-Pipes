import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesexample',
  templateUrl: './pipesexample.component.html',
  styleUrls: ['./pipesexample.component.scss']
})
export class PipesexampleComponent implements OnInit {
 Name='AriqtInternational';
 Number=3456;
 Message='Welcome to T-hub';
 percentage=0.75;
 currency =100;
 date=Date.now();
 persons={
  "firstname":"smk",
  "lastname":"naidu",
  city:"Hyderabad",
  citycode:"HYD"
 }

  constructor() { }

  ngOnInit(): void {
  }

}
