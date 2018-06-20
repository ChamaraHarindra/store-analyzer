// Change logo image URL
var screenWidth = window.innerWidth;

if (screenWidth <= 768) {
  document.getElementById('logo-main').src = './images/logo-small.png';
}

// Calendar widget
window.addEventListener('load', function() {
  vanillaCalendar.init({
    disablePastDays: true
  });
});

$(document).ready(function() {
  $('#sidebar').mCustomScrollbar({
    theme: 'minimal'
  });

  $('#sidebarCollapse').on('click', function() {
    $('#sidebar, #content').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });

  $('#asideClose').on('click', function() {
    $('#sidebar, #content').toggleClass('active');
  });
});

$(function() {
  $('#wizard').steps({
    headerTag: 'h2',
    bodyTag: 'section', 
    transitionEffect: 'slideLeft',
    stepsOrientation: 'vertical'
  });
});
