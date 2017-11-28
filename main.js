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
  $("#enter-btn").hide();
  $('.title').show();
  });
  
  $('#close').on('click', () => {
  $("#enter-btn").hide();
  $('.title').show();
  });
  
  // about page text fadeTo 
  
  $('#about-text').delay(1000).fadeTo(2000, 1);
  
  //#post-img animation
  var count = Math.floor(Math.random() * 10000) + 1;
  
  function flicker() {
    
  $('#post-img').fadeTo(5, 0).delay(500).fadeTo(100, 1); 
    }
    
  setInterval(flicker, count);
  
  
 //controls and settings for mobile devices
  
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  $('#close').hide();
  //document.getElementById("landingvid").controls = true;
  $('.title').fadeTo(2000, 1);
  $('#enter-btn').fadeTo(2000, 1);
  $('#landingvid').hide();
  $('#poster').show();
  
  $('#about-text').removeClass('col-sm-4').addClass('col-sm-12').css({'max-width' : '500px', 'float' : 'none', 'margin' : 'auto'});
  $('#about-img').removeClass('col-sm-8').addClass('col-sm-12');

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
