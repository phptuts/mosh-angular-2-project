import { Control } from '@angular/common';

export class EmailValidator {

    static validateEmail(control : Control)  {
        if(control.value === undefined) {
            return null;
        }
        if(control.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return null;
        }
        else {
            return {'invalidEmail': true};
        }
        
    }

}