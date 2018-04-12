$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#project');
   var offset = startchange.offset();

   $('#welcome_msg').css('display', 'none').fadeIn(3000);
    if (startchange.length){
       $(document).scroll(function() {
          scroll_start = $(this).scrollTop();
          if(scroll_start > offset.top - 40) {
            //$(".navbar-font").css('color', 'black');
            $(".navbar-main").css('background-color', 'rgba(0, 0, 0, 1.0)');
            $(".navbar-main").css('border', 'solid 1px rgba(225, 225, 225, 1.0)');
           } else {
             //$(".navbar-font").css('color', 'white');
             $('.navbar-main').css('background-color', 'transparent');
             $(".navbar-main").css('border', 'none');
           }
       });
    }
});
