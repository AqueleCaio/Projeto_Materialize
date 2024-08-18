(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

    // Init click event for the list items
    $('ul li').click(function(){
      $('li ').removeClass("active");
      $(this).addClass("active");
    });

    $('input#input_text, textarea#textarea2').characterCounter();

  }); // end of document ready
})(jQuery); // end of jQuery name space
