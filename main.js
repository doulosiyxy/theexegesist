$(document).ready( function() {
  
  $('#close').delay(2000).fadeTo(2000, 1); 
  
  $("#landingvid").on("ended", function() {
  
  $('.title').fadeTo(2000, 1);
  $('#enter-btn').fadeTo(2000, 1);
  $('#close').fadeOut(2000);
    
 });

//below is for text change on enter btn.

  $("#enter-btn").on('mouseenter', () => {
  $("#enter-btn").text("If You Dare");
  });
  
  $("#enter-btn").on('mouseleave', () => {
  $("#enter-btn").text("Enter");
  });
  
 //on click event listener to show header on home and blog page
  
  $("#enter-btn").on('click', () => {
  $("#enter-btn").fadeTo(0, 0);
  $('.title').fadeTo(0, 1);
  });
  
  $('#close').on('click', () => {
  $("#enter-btn").fadeTo(0, 0);
  $('.title').fadeTo(0, 1);
  });
  
  
 //controls and settings for mobile devices
  
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  $('#close').hide();
  document.getElementById("landingvid").controls = true;
  $('.title').fadeTo(2000, 1);
  $('#enter-btn').fadeTo(2000, 1);

/*//fade in and outs on play
 $("#landingvid").on('play',function() {
   $('.title').fadeTo(2000, 0);
   $('#enter-btn').fadeTo(2000, 0);
   
 });
  
 $("#landingvid").on("ended" || "paused", function() {
  
   $('.title').fadeTo(2000, 1);
   $('#enter-btn').fadeTo(2000, 1);
   $('#close').fadeOut(2000);
    
 });*/
  
}
  
  
});
