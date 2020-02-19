$(document).ready(function(){
    
    $("#nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1250);
    });

    
    $("#btnAlert").click(function() {
        var text = document.getElementById('txtAlert').value;
        if (text != "") {
            alert(text);
        }
        else {
            alert("Введите текст!");
        };
    });

    $("#btnStartApp").click(function() {
        
    });

    $(window).scroll(function () {
        // Если отступ сверху больше 50px то показываем кнопку "Наверх"
        if ($(this).scrollTop() > 50) {
            $('#button-up').fadeIn();
        } else {
            $('#button-up').fadeOut();
        }
    });
    
    /** При нажатии на кнопку мы перемещаемся к началу страницы */
    $('#button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1250);
        return false;
    });

});