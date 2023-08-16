import { Component, OnInit } from '@angular/core';

function identity<T>(arg: T): T {
  return arg;
}

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})



export class Comp2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  identityValue: number = identity(7);
}
