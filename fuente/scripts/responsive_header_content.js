function margen_main_header(){
    $('main').css("margin-top", $('header').height());
  }
  $(document).ready(margen_main_header);
  $(window).resize(margen_main_header);
  