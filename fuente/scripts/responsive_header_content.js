function dynamicHeight(){
    $('main').css("margin-top", $('header').height());
  }
  $(document).ready(dynamicHeight);
  $(window).resize(dynamicHeight);
  