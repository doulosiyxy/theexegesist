$(document).ready( function() {
  $('.title').delay(19500).fadeTo("2000", 1);
  $('#enter-btn').hide().delay(19500).fadeIn(700);
  $('#close-wrapper').delay(2000).fadeTo(2000, 1).delay(15500).fadeOut(2000);

//below is for text change on enter btn.

  $("#enter-btn").on('mouseenter', () => {
  $("#enter-btn").text("If You Dare");
  });
  
  $("#enter-btn").on('mouseleave', () => {
  $("#enter-btn").text("Enter");
  });
  
  
});
