import {AbstractControl, ValidatorFn} from "@angular/forms";

export function checksex(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null =>
    control.value?.toLowerCase() === "male" || control.value?.toLowerCase() === "female"
  ? null : {test: control.value}
}
