import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidden'
})
export class HiddenPipe implements PipeTransform {

  transform(password: string): string {
    var pl = password.length;
    var mask="";
    
    for(let idx = 0; idx < pl; idx++) {
      mask+="*";
    }
    return mask;
  }

}
