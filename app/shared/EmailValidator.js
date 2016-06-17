"use strict";
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.validateEmail = function (control) {
        if (control.value === undefined) {
            return null;
        }
        if (control.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return null;
        }
        else {
            return { 'invalidEmail': true };
        }
    };
    return EmailValidator;
}());
exports.EmailValidator = EmailValidator;
//# sourceMappingURL=EmailValidator.js.map