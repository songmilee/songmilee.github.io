$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#who');
   var offset = startchange.offset();
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

function showText(target, message, index, interval){
  if(index < message.length){
    $(target).append(message[index++]);
    setTimeout(function(){
      showText(target, message, index, interval);
    }, interval);
  }
}
