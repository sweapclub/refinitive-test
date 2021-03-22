import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prime'
})
export class PrimePipe implements PipeTransform {
  transform(num: number): boolean {
    for (let i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num > 1;
  }
}

@Pipe({
  name: 'fibonancci'
})
export class FibonancciPipe implements PipeTransform {
  transform(num: number): number {
    const fibonacci = (num) => {
      if (num <= 1) return 1;
      return fibonacci(num - 1) + fibonacci(num - 2)
    }

    return fibonacci(num);
  }
}
