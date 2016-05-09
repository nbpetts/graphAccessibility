"use strict";

$('details').details();

// thank you Martijn van der Ven https://gist.github.com/Zegnat
$("a[href^='#']").not("a[href='#']").click(function() {
   $("#"+$(this).attr("href").slice(1)+"").focus();
});
