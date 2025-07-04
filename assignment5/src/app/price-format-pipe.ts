import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat'
})
export class PriceFormatPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if(value == null || isNaN(value))
    {
      return '';
    }
    return `₹${value.toFixed(2)} INR`;
  }

}
