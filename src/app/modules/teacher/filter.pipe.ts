import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(args);
    if(!args){
      return value;
    }
   
    return value.filter(item => item.fname.toLocaleLowerCase().indexOf(args) !== -1 || item.lname.toLocaleLowerCase().indexOf(args) !== -1);
  }

}
