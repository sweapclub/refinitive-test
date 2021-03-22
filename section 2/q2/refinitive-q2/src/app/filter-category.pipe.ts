import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(category: Array<string>, text?: string): Array<string> {
    if (category.length == 0) {
      return [];
    }
    return text ? category.filter((f: String) => f.includes(text)) : category;
  }
}
