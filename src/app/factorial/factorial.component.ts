import {Component} from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.scss']
})
export class FactorialComponent {
  factorial: any;
  n: 0;


  // @ts-ignore
  calculateFactorial(n): any {
    if (isNaN(n)) {
      this.factorial = 'Only digits are expected'
      throw new TypeError('Negative Number');
    }

    this.factorial = n < 0
      ? (() => {
        this.factorial = 'Only positive values are expected'
        throw new TypeError('Negative Number');
      })()
      : n <= 1
        ? 1
        : n * this.calculateFactorial(n - 1);

    return this.factorial;
  }
}
