import { Component } from '@angular/core';
import { Datetime } from '../app/datetime';

@Component({
    selector: 'app-person-details',
    template: `
      <div>
        <h2>Person Details</h2>
        <p>First Name: {{ dateTime.date }}</p>
        <p>Last Name: {{ dateTime.time }}</p>       
      </div>    
    `,
  })
  
export class CurrentDatetime {
    dateTime: Datetime = { date: '2023-08-15', time: '12.45' };
      constructor() {}

  ngOnInit(): void {}
}
