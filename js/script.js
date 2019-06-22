'use strict';
window.onload = function () {
  $("#tabs").tabs({
    active:0,
    beforeActivate: function( event, ui ) {
      console.log(event,ui);
    }
  });

  $("#sortable").sortable();
  $(".flexslider").flexslider();
}


// $('.js-contentToggle').contentToggle({
//   independent: true,
//   toggleOptions : {
//     duration: 400
//   }
// });

$("#hello").on('click', function() {

  $.fancybox.open('<div class="message"><h2>Hello!</h2><p>You are awesome!</p></div>');

});
