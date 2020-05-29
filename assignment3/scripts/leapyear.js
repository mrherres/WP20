function val_email() {
    let mail_input = $('#validationCustom03');
    let email_value = mail_input.val();
    let mail_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email_value.match(mail_regex) && email_value !== ''){
        mail_input.removeClass('is-invalid');
        mail_input.addClass('is-valid');
        return true;
    } else {
        mail_input.removeClass('is-valid');
        mail_input.addClass('is-invalid');
        return false;
    }
}

function val_age() {
    let age_input = $('#validationCustom02');
    let age_value = age_input.val();
    let age_regex = /^([0-9]{1,3}$)/
    if (age_value.match(age_regex) && age_value !== ''){
        age_input.removeClass('is-invalid');
        age_input.addClass('is-valid');
        return true;
    } else {
        age_input.removeClass('is-valid');
        age_input.addClass('is-invalid');
        return false;
    }
}

function val_name() {
    let name_input = $('#validationCustom01');
    let name_value = name_input.val();
    let name_regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
    if (name_value.match(name_regex) && name_value !== ''){
        name_input.removeClass('is-invalid');
        name_input.addClass('is-valid');
        return true;
    } else {
        name_input.removeClass('is-valid');
        name_input.addClass('is-invalid');
        return false;
    }
}

function val_city() {
    let city_input = $('#validationCustom04');
    let city_value = city_input.val();
    let city_regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
    if (city_value.match(city_regex) && city_value !== ''){
        city_input.removeClass('is-invalid');
        city_input.addClass('is-valid');
        return true;
    } else {
        city_input.removeClass('is-valid');
        city_input.addClass('is-invalid');
        return false;
    }
}

$(function() {
    $('#validationCustom01').keyup(function () {
        val_name();
    })
    $('#validationCustom02').keyup(function () {
        val_age();
    })
    $('#validationCustom03').keyup(function () {
        val_email();
    })
    $('#validationCustom04').keyup(function () {
        val_city();
    })
    $('#submit').click(function() {
        if(val_name() && val_age() && val_email() && val_city()){
            $('form').submit()
        }
    })
});