// Change logo image URL
var screenWidth = window.innerWidth;

// if (screenWidth <= 768) {
//   document.getElementById('logo-main').src = './images/logo-small.png';
// }

$(document).ready(function() {
  $('#sidebar, #myTeam, #aboutCompany').mCustomScrollbar({
    theme: 'dark'
  });

  $('#sidebarCollapse').on('click', function(e) {
    $('#sidebar, #content').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    e.stopPropagation();
  });

  
});

// sidebar close on body click and close click
  $(document).click(function(e) {
    if (!$(e.target).is('.aside, .aside *')) {
      $('#sidebar').addClass('active');
      console.log('close aside');
    }
  });

  $('#asideClose').on('click', function() {
    $('#sidebar, #content').addClass('active');
  });



// Vertical wizard active tab
$('#v-pills-tab li').on('click', function() {
  $('#v-pills-tab li').removeClass('activated');
  $(this).addClass('activated');
});


// Google map popover

$('[data-toggle=popover]').popover({
  html: true,
  content: function content() {
    return $('#popover-content').html();
  }
});

// tooltip

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

// Easy wizard
$(function() {
  $('#ecology').steps({
    headerTag: 'h2',
    bodyTag: 'section',
    transitionEffect: 'slideLeft',
    autoFocus: true,
    /* Labels */
    labels: {
      finish: 'Accept',
      next: 'Next',
      previous: 'Previous',
      loading: 'Loading ...'
    },
    onFinished: function(event, currentIndex) {
      $('#mandatoryLogin').modal('hide');
    }
  });
});

// close post
$('.post__close').on('click', function() {
  var closed = $(this).closest('div.ui-block');
  closed.hide(500);
})


