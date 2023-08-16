import { Component } from '@angular/core';

export enum days {
  Sunday,
  Monday,
  Tuesday,
  Wednessday,
  Thursday,
  Friday,
  Saturday
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'module';
  days: string = days[days.Sunday];
}
