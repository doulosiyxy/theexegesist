// about page text fadeTo 
$('#about-text').delay(1000).fadeTo(2000, 1);

$('#title').on('click', () => {
   		window.location.href='../index.html';
    });

$(document).ready( function() {
  $('#close').delay(2000).fadeTo(2000, 1); 
  $("#landingvid").on("ended", function() {
  $('.title').fadeTo(2000, 1);
  $('#enter-btn').fadeTo(2000, 1);
  $('#close').fadeOut(2000);  
 });
//below is for text change on enter btn
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
  //#post-img animation
  function flicker() { 
    $('.post-img').fadeTo(5, 0).delay(50).fadeTo(100, 1).delay(50).fadeTo(5, 0).delay(1000).fadeTo(100, 1); 
    }
  setInterval(flicker, 10000);

  $('.post-img').on('click', () => {
  	$('.post-img').fadeTo(5, 0).delay(50).fadeTo(100, 1).delay(50).fadeTo(5, 0).delay(1000).fadeTo(100, 1);
   // inverting elements
        /*if($('.post-img').hasClass('normal')) {
	        $('*').removeClass('normal').addClass('inverted');
        } else {
	        $('*').removeClass('inverted').addClass('normal');
        }*/	
    
  }); 
  //popups
  $('.icon-mu').on('mouseover | click', () => {
    $('#mypopup').toggleClass("show");
    $('.popup').toggleClass("show");
    $('.popuptext').toggleClass("show");          
  }).on('mouseleave', () => {
    $('#mypopup').removeClass("show");
    $('.popup').removeClass("show");
    $('.popuptext').removeClass("show");
  });
 //controls and settings for mobile devices
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  if ($(window).width() < 414) {
    $('.icon').css('margin-left', '2px').css('margin-right', '7px');
  }	
  $('#main-nav').css('margin-left', 'auto');
  $('#close').hide();
  //document.getElementById("landingvid").controls = true;
  $('.title').fadeTo(2000, 1);
  $('#enter-btn').fadeTo(2000, 1);
  $('#landingvid').hide();
  $('#poster').show();
  // about page
  $('#about-text').removeClass('col-sm-4').addClass('col-sm-12').css({'max-width' : '500px', 'float' : 'none', 'margin' : 'auto'});
  $('#about-img').removeClass('col-sm-8').addClass('col-sm-12');
  //blog posts
  $('#articles').css({'max-width' : '700px', 'float' : 'none', 'margin' : 'auto'});
  $('#sidebar').hide();
  $('#sidebar-two').fadeIn('slow').css({'max-width' : '260px', 'margin-top' : '20px'});
  $('#post-text').removeClass('col-sm-8').addClass('col-sm-12').css({'max-width' : '550px', 'float' : 'none', 'margin' : 'auto'}); 
  $('.icon').css({'max-width' : '10px', 'max-height' : '10px'});
}   
});
