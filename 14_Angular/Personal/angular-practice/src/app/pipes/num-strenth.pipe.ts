import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numStrenth'
})
export class NumStrenthPipe implements PipeTransform {

  transform(value: any):any {
    if(value<5){
      return `${value} [weak]`
    }
    else if(value>=5 && value<=10){
      return `${value} [strong]`
    }
    else if(value>10){
      return `${value} [strongest]`
    }
    
  }

}
