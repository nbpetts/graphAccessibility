"use strict";

$(document).ready(function() {
  $('details').details(); // for firefox polyfill

  // thank you Martijn van der Ven https://gist.github.com/Zegnat
  $("a[href^='#']").not("a[href='#']").click(function() {
     $("#"+$(this).attr("href").slice(1)+"").focus();
  });


});// end ready
