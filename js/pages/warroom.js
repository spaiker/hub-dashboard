$('.js-toggle-like').click(function(){
    $(this).addClass('features-widget-icon_like');
});
$('.js-toggle-slide').click(function(){
    $('.content-body__sidebar').toggleClass('content-body__sidebar-animation-in');
    if('.content-body__sidebar'.hasClass('content-body__sidebar-animation-in')) {
        $('.extra-widget-item').click(function(){
            $('.content-body__sidebar').removeClass('content-body__sidebar-animation-in');
        });
    }
});