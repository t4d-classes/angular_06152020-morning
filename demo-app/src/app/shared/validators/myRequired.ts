import { AbstractControl } from '@angular/forms';
import { isNil } from 'lodash';

export const myRequired = (c: AbstractControl) => {

  if (isNil(c.value) || String(c.value).length === 0) {
    return {
      myRequired: true, // myRequired validator failed
    };
  }

  // the control is valid
  return null;

};
