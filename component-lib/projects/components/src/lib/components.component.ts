import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-components',
  template: `
    <p>
      components works!
      what else can we do here?..........
    </p>
  `,
  styles: [
  ]
})
export class ComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
