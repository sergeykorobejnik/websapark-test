"use strict";let firstDatepicker=new AirDatepicker("#datepicker-1",{selectedDates:[new Date]}),secondDatepicker=new AirDatepicker("#datepicker-2",{selectedDates:[new Date]});$(".list").click(function(){$(".card-holder").removeClass("card-holder-grid"),$(".card").each(function(e,c){e<8?$(c).removeClass("card-grid"):$(c).css("display","flex")})}),$(".grid").click(function(){$(".card-holder").addClass("card-holder-grid"),$(".card").each(function(e,c){e<8?$(c).addClass("card-grid"):$(c).css("display","none")})});