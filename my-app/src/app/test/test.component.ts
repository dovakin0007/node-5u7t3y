import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1>{{title}}</h1>
  
  <p>Heroes:</p>
  <ul>
    <li *ngFor="let hero of heroes">
      {{ hero }}
    </li>
  </ul>
  <button [disabled]="isDisabled"> with interpolation </button>
  <button disabled={{isDisabled}}> with property </button>
`,

  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  title = 'Tour of Heroes';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroes[0];
  isDisabled = false;
}
