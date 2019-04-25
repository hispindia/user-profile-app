
// Taken from the HTML5 spec http://www.w3.org/TR/html5/forms.html#e-mail-state-(type=email)
var emailRegExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

var tenDigit = /^\d{10}$/;

var regName = /^[a-zA-Z]*$/;

var maxLength = 7;

var codeMaxLength = 20;

var codeName =  /^[0-9a-zA-Z_@$-]+$/;

export function isCodeString(value){
    if(codeName.test(value) && isRequired(value) && value.length <= codeMaxLength)
    {
        return true;
    }
    else
    {

        return false;
    }
    return value === null;
}
isCodeString.message = 'value_should_be_number_or_string_with_some_special_character';
export function isValidString(value) {

    if(regName.test(value) && isRequired(value) && value.length <= maxLength)
    {
        return true;
    }
    else
    {

        return false;
    }
    return value === null;
}
isValidString.message = 'value_should_be_string';
export function isPhoneNumber(value) {

    if(tenDigit.test(value))
    {
        return true;
    }
    else
    {

        return false;
    }

    return value === null;

}
isPhoneNumber.message = 'value_should_be_a_ten_digit_number';

export function isUndefined(value) {
    return value === undefined;
}

export function isEmptyString(value) {
    return value === '' || value !== undefined && value !== null && value.toString() === '';
}
isEmptyString.message = 'value_should_be_empty_string';

export function isEmptyStringOrUndefined(value) {
    return isUndefined(value) || isEmptyString(value);
}
isEmptyStringOrUndefined.message = 'value_should_be_empty_string_or_undefined';

export function isRequired(value) {
    return Boolean(value) || value === 0 || value === false;
}
isRequired.message = 'value_required';

export function isEmail(value) {
    if (isEmptyStringOrUndefined(value)) {
        return true;
    }
    return emailRegExp.test(value);
}
isEmail.message = 'value_should_be_an_email';

export var validatorMap = new Map([ ['codeString', isCodeString], ['nameString', isValidString],['phoneNumber', isPhoneNumber],['required', isRequired],  ['email', isEmail]]);

export default {
    isRequired: isRequired,
    isValidString: isValidString,
    isCodeString:isCodeString,
    isEmail: isEmail,
    isEmptyString: isEmptyString,
    isPhoneNumber:isPhoneNumber,
    isUndefined: isUndefined,
};
