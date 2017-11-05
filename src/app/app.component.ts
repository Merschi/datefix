import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <my-appoints></my-appoints>
  `
})
export class AppComponent {
  title = 'The date fixer1';
}
