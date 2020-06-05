import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appRangoModelos]',
  providers: [{provide: NG_VALIDATORS, useExisting: RangoModelosDirective, multi:true}]
})
export class RangoModelosDirective implements Validator{

  @Input('appRangoModelos') rangomodelos: number[];
  constructor() { }

  validate(control: AbstractControl): {[key:string]:any}{
    return this.rangomodelos ? this.rangoModelosValidator(this.rangomodelos)(control): null;
  }

  rangoModelosValidator(nameRe: number[]): ValidatorFn{
    return (control: AbstractControl): { [key: string]: any } | null => {
      let min = nameRe[0];
      let max = nameRe[1];
      const forbidden = min < max;
      return forbidden ? { 'forbiddenModels': { value: nameRe } } : null;
    };
  }
}
