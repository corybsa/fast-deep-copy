import { Component } from '@angular/core';
import copy from "fast-copy";
import { bigData } from './models/bigData';
import { circularObject } from './models/circular';
import { complexObject } from './models/complex';
import { Helper } from './models/helper';
import { simpleObject } from './models/simple';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fast-deep-copy';
  iterations = 1000;
  copyTime: number = 0;
  fastCopyTime: number = 0;

  constructor() {
    this.copy();
    this.fastCopy();
  }

  copy() {
    const start = window.performance.now();
    for(let i = 0; i < this.iterations; i++) {
      Helper.copy(simpleObject);
      Helper.copy(complexObject);
      Helper.copy(circularObject);
      Helper.copy(bigData);
    }
    const end = window.performance.now();
    this.copyTime = end - start;
  }

  fastCopy() {
    const start = window.performance.now();
    for(let i = 0; i < this.iterations; i++) {
      copy(simpleObject);
      copy(complexObject);
      copy(circularObject);
      copy(bigData);
    }
    const end = window.performance.now();
    this.fastCopyTime = end - start;
  }
}
