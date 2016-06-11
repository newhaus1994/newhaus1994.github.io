$(document).ready(function(){
	$("#header, #subheader").hide().each(function(i) {
  		$(this).delay(i*500).fadeIn(1500);

});
	$("div#nav").hover(
      function () {
        $("#navli").fadeIn('slow');
      }, 
      function () {
        $("#navli").fadeOut('slow');
      }
    );
  $("#header, #subheader").click(function(i){
    $("#header, #subheader").delay(i*500).fadeOut(1500);
    $("#lyrics").delay(1500).fadeIn(3000);
  })

});
