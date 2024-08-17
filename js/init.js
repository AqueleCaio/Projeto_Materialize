(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

    // Init click event for the list items
    $('ul li').click(function(){
      $('li ').removeClass("active");
      $(this).addClass("active");
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
