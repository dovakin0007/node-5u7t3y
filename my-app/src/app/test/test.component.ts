import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: `
  <h1>{{name}}</h1>
  `,
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  name = 'Gowtham';

  constructor() {}
  ngOnInit() {}
}
