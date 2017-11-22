$(document).ready( function() {
  $('.title').delay(19500).fadeTo(2000, 1);
  $('#enter-btn').hide().delay(19500).fadeIn(2000);
  $('#close').delay(2000).fadeTo(2000, 1).delay(15500).fadeOut(2000);

//below is for text change on enter btn.

  $("#enter-btn").on('mouseenter', () => {
  $("#enter-btn").text("If You Dare");
  });
  
  $("#enter-btn").on('mouseleave', () => {
  $("#enter-btn").text("Enter");
  });
  
  //below triggers poster if device is mobile and hides video content.
  
  if(site.isMobile()){
    $('video *').hide(1);
    $('#poster').show(2000);
} 
  
});
