"use strict";

let firstDatepicker = new AirDatepicker ('#datepicker-1', {
    selectedDates: [new Date()],
});
let secondDatepicker = new AirDatepicker ('#datepicker-2', {
    selectedDates: [new Date()],
});

$('.list').click(function(){
    $('.card-holder').removeClass('card-holder-grid');
    $('.card').each(function(index, element) {
        if (index < 8) {
            $(element).removeClass('card-grid');
        } else {
            $(element).css('display', 'flex');
        }
    });
    
});

$('.grid').click(function(){
    $('.card-holder').addClass('card-holder-grid');
    $('.card').each(function(index, element) {
        if (index < 8) {
            $(element).addClass('card-grid');
        } else {
            $(element).css('display', 'none');
        }
    });
    
});