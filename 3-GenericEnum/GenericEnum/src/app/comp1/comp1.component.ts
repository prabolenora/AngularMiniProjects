import { Component, OnInit } from '@angular/core';
import { days } from '../app.component';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  days: string = days[days.Monday];

}
