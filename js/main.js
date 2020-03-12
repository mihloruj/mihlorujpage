$(document).ready(function(){

    var audioShrek = new Audio('audio/shrek.mp3');
    var audioRicardo = new Audio('audio/ricardo.mp3');
    var audioSkripka = new Audio('audio/skripka.mp3');


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

    $(window).scroll(function () {
        // Если отступ сверху больше 50px то показываем кнопку "Наверх"
        if ($(this).scrollTop() > 50) {
            $('#button-up').fadeIn();
        } else {
            $('#button-up').fadeOut();
        }
    });

    $(window).scroll(function () {
        // рикардо музычка
        if ($(this).scrollTop() > $("#section_4").offset().top-5 & $(this).scrollTop() < $("#section_5").offset().top) {
            audioRicardo.play();
        }
        else
        {
            audioRicardo.pause();
        } 
    });

    $(window).scroll(function () {
        // шрек музычка
        if ($(this).scrollTop() > $("#section_3").offset().top-25 & $(this).scrollTop() < $("#section_4").offset().top-5) {
            audioShrek.play();
        }
        else
        {
            audioShrek.pause();
        } 
    });
    
    $(window).scroll(function () {
        // скрипка музычка
        if ($(this).scrollTop() > $("#section_5").offset().top-5 & $(this).scrollTop() < $("#section_6").offset().top-5) {
            audioSkripka.play();
        }
        else
        {
            audioSkripka.pause();
        } 
    });
    
    /** При нажатии на кнопку мы перемещаемся к началу страницы */
    $('#button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1250);
        return false;
    });


    // Калекалятор

    // VARIABLES
    var calc = $('.calculator');
    var calcDisplay = calc.find('.calculator__display');
    var calcKeys = calc.find('.calculator__key');
    var calcButton = calc.find('.calculator__button');
    var calcClear = calc.find('.calculator__clear');
    var calcEqual = calc.find('.calculator__key--equal');
    var calcPower = calc.find('.calculator__power');
    var calcSpace = calc.find('.calculator__backspace');

    // INIT CALC KEYS
    calcKeys.each(function () {
        var current = $(this).attr('value');
        $(this).text(current);
    });

    // ADD NUMBERS TO INPUT
    calcButton.on('click', function () {
        calcDisplay.val( calcDisplay.val() + $(this).attr('value') );
    });

    // CLEAR INPUT
    calcClear.on('click', function () {
        calcDisplay.val('');
    });

    // SHOW RESULT
    calcEqual.on('click', function () {
        calcDisplay.val( eval( calcDisplay.val() ) );
    });

    // POWER BUTTON
    calcPower.on('click', function () {
        calcDisplay.val( Math.pow( calcDisplay.val(), 2 ) );
    });

    // BACKSPACE BUTTON
    calcSpace.on('click', function () { // http://www.w3schools.com/jsref/jsref_substring.asp
        calcDisplay.val( calcDisplay.val().substring(0, calcDisplay.val().length-1) );
    });


});