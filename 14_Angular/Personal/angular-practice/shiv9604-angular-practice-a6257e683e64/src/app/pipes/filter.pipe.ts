import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(data:any,value: any): any {
    if(value!=''){
      let result = []
      for(let item of data){
        if(item.email.toLowerCase().includes(value.toLowerCase())){
          result.push(item)
        }
      }
      return result
    }
    else{
      return data;
    }
    
  }

}

