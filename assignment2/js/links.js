function createitems() {
    if ($('.nav-item')[1].className === "nav-item active") {
            $('.wp-row').append('<ul class="list"></ul>');
            $('.list').append('<li><a href="https://google.com" target="_blank">Google</a></li>',
            '<li><a href="https://firefox.com" target="_blank">Firefox</a></li>',
            '<li><a href="https://bing.com" target="_blank">Bing</a></li>');
            $('.wp-row').append('<button class="btn btn-primary" type = "button">Fade</button>');
    }
}

function activatebutton() {
    $('.btn-primary').click(function () {
        $('.list').fadeToggle();
    })
}
i = 0
function createinputfield() {

    if ($('.nav-item')[1].className === "nav-item active") {
        $('.wp-row').append('<input class="link" type="text" placeholder="link">',
            '<input class="url" type="text" placeholder="url">',
            '<button class="btn btn-secondary" type="button">Append Link</button>');
        }
}

function getinput(){
        var link = $('.link').val();
        var url = $('.url').val();
        i += 1;
        $(".list").append("<li><a id= 'name" + i + "'/></li>");
        $('#name' + i).attr('href', url).attr('target', '_blank').text(link);
}

function validation() {
    if ($('.nav-item')[1].className === "nav-item active") {
        $('.container').append('<div id="faultylink" class="alert alert-danger" role="alert">Please make sure you only use numbers and letters for the link name!</div>');
        $('.container').append('<div id="faultyurl" class="alert alert-danger" role="alert">Please make sure your url starts with \'https://\'</div>');
        $('.container').append('<div id="empty" class="alert alert-danger" role="alert">Please make sure you fill in both fields!</div>');
        $('#empty').hide();
        $('#faultyurl').hide();
        $('#faultylink').hide();
        $('.btn-secondary').click(function () {
            $('#empty').hide();
            $('#faultyurl').hide();
            $('#faultylink').hide();
            var link = $('.link').val();
            var url = $('.url').val();
            var link_validation = /^[A-Za-z0-9]+$/.test(link);
            var url_validation = (/^https:\/\/www\.+[A-Za-z0-9.-?!#]+\.[A-Za-z]{2,4}$/i).test(url);
            if ( url === "" || link === "") {
                $('#empty').show();
            } else if (link_validation === false) {
                $('#faultylink').show()
            }
            else if (url_validation === false) {
                $('#faultyurl').show();
            }
            else if ( url === "" || link === "") {
                $('#empty').show();
            } else {
                getinput()
                $('#faultylink').hide()
                $('#empty').hide();
                $('#faultyurl').hide();

            }
        })
    }
}
function deletebutton() {
    $('.wp-row').append('<button class="btn-primary" id="delete" type="button">Delete</button>');
        $('h1').click(function () {
            $(this).remove();
        })
    }




$(document).ready( function() {
    createitems()
    createinputfield()
    activatebutton()
    validation()
    deletebutton()
});