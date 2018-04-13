$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#project');
   var offset = startchange.offset();

   $('#welcome_msg').css('display', 'none').fadeIn(3000);
    if (startchange.length){
       $(document).scroll(function() {
          scroll_start = $(this).scrollTop();
          if(scroll_start > offset.top - 40) {
            $(".navbar-main").css('background-color', 'rgba(153, 153, 204, 1.0)');
            $(".navbar-main").css('border', 'solid 1px rgba(153, 153, 204, 1.0)');
           } else {
             $('.navbar-main').css('background-color', 'transparent');
             $(".navbar-main").css('border', 'none');
           }
       });
    }
});
