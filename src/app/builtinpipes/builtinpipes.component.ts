import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builtinpipes',
  templateUrl: './builtinpipes.component.html',
  styleUrls: ['./builtinpipes.component.scss']
})
export class BuiltinpipesComponent implements OnInit {
 firstcase="ariqtinternational";
 secondcase="ARIQTINTERNATIONAL";
 dateExample=Date.now();
 currency=100;
 percentexample=0.4255;
  constructor() { }

  ngOnInit(): void {
  }

}
