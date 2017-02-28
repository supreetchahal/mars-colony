import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <p>You've clicked the button {{clickCount}} times</p>
  <p>New title: <input [(ngModel)]="newTitle"></p>
  <button (click)="changeTitle()">Change that title</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  newTitle = '';
  clickCount = 0;

  changeTitle(event){
    this.title = this.newTitle;
    this.clickCount++;
  }
} 
