import { Pipe, PipeTransform } from '@angular/core';
import { isNil } from 'lodash';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(text: unknown, textMaxLength: unknown): unknown {

    // checking for null and undefined
    // if (text == null) {
    //   return '';
    // }
    // if (text === null && text === undefined) {
    //   return '';
    // }
    if (isNil(text)) {
      return '';
    }

    const sText = String(text);

    const nTextMaxLength = Number(textMaxLength);

    if (isNaN(nTextMaxLength)) {
      return sText;
    }

    if (sText.length <= nTextMaxLength) {
      return sText;
    } else {
      return sText.slice(0, nTextMaxLength) + '...';
    }
  }

}
