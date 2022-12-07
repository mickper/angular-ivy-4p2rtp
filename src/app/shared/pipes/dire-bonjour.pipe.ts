import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'direBonjour',
})
export class DireBonjourPipe implements PipeTransform {
  transform(prenom: string, salutation = 'Salut', end = '!'): any {
    return `${salutation} ${prenom} ${end}`;
  }
}
