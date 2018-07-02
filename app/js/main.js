// Change logo image URL
var screenWidth = window.innerWidth;

if (screenWidth <= 768) {
  document.getElementById('logo-main').src = './images/logo-small.png';
}

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


$('#v-pills-tab li').on('click', function() {
  $('#v-pills-tab li').removeClass('activated');
  $(this).addClass('activated');
});

// lock icon and edit icon click events
$('#v-pills-tab em.lock-form').on('click', function() {
  alert('You clicked on lock icon')
});

$('#v-pills-tab em.edit-form').on('click', function() {
  alert('You clicked on edit icon')
});

// Google map popover

  $("[data-toggle=popover]").popover({
    html: true,
    content: function content() {
      return $('#popover-content').html();
    }
  });

  // tooltip

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })



