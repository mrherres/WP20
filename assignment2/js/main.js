function validateform() {
    var emailval = /^[A-Za-z]+@[A-Za-z]$/
    $('#submit').click( function() {
        var name = $("#InputName1").val()
        var age = $("#InputAge1").val()
        var city = $("#InputCity1").val()
        var email = $("#InputEmail1").val()
        var number = $("#InputPhone1").val()

        var name_validation = /^[A-Za-z]+$/.test(name);
        var age_validation = /^[0-9]+$/.test(age);
        var city_validation = /^[A-Za-z]+$/.test(city);
        var email_validation = (/^[+A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i).test(email);
        var number_validation = /^[0-9]+$/.test(number);

        if( name_validation === false){
            document.getElementById('form-alert').innerHTML = "Please only use letters for your name";
            document.getElementById('form-alert').style.display='inline';
            document.getElementById('form-content').style.display='none';
        }
        if( age_validation === false){
            document.getElementById('form-alert').innerHTML = "Please only use numbers for your age";
            document.getElementById('form-alert').style.display='inline';
            document.getElementById('form-content').style.display='none';
        }
        if( city_validation === false){
            document.getElementById('form-alert').innerHTML = "Please only use letters for your city of residency";
            document.getElementById('form-alert').style.display='inline';
            document.getElementById('form-content').style.display='none';
        }
        if( email_validation === false){
            document.getElementById('form-alert').innerHTML = "Please make sure your email address is correct";
            document.getElementById('form-alert').style.display='inline';
            document.getElementById('form-content').style.display='none';
        }
        if( number_validation === false){
            document.getElementById('form-alert').innerHTML = "Please only use numbers for your phone number";
            document.getElementById('form-alert').style.display='inline';
            document.getElementById('form-content').style.display='none';
        }
        if(name_validation === true && age_validation === true && city_validation === true && email_validation === true && number_validation === true){
            document.getElementById('form-alert').style.display='none';
            writeFormData()
        }

    })
}

function writeFormData(){
    var name = $("#InputName1").val()
    var age = $("#InputAge1").val()
    var city = $("#InputCity1").val()
    var email = $("#InputEmail1").val()
    var number = $("#InputPhone1").val()
    document.getElementById('form-content').style.display='inline';
    document.getElementById('name').innerHTML = name;
    document.getElementById('age').innerHTML = age;
    document.getElementById('city').innerHTML = city;
    document.getElementById('email').innerHTML = email;
    document.getElementById('number').innerHTML = number;
}

function resetForm() {
    $('#reset').click( function() {
        $("#InputName1").val('')
        $("#InputAge1").val('')
        $("#InputCity1").val('')
        $("#InputEmail1").val('')
        $("#InputPhone1").val('')
        document.getElementById('form-content').style.display = 'none';
        document.getElementById('form-alert').style.display = 'none';
        return false;
    })
}


function activateContact() {
    $("a[href='#contact']").click( function() {
        document.getElementById('link-tab').className = 'nav-link';
        document.getElementById('contact-tab').className = 'nav-link active';
        document.getElementById('links').className = 'tab-pane';
        document.getElementById('contact').className = 'tab-pane active';
    })
    $("a[href='#links']").click(function() {
        document.getElementById('contact-tab').className = 'nav-link';
        document.getElementById('link-tab').className = 'nav-link active';
        document.getElementById('contact').className = 'tab-pane';
        document.getElementById('links').className = 'tab-pane active';
    })

}

$(document).ready(function(){
    activateContact()
    resetForm()
    validateform()
});

