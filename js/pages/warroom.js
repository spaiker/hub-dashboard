$('.js-toggle-like').click(function(){
    $(this).addClass('features-widget-icon_like');
});
$('.js-toggle-slide').click(function(){
    $('.content-body__sidebar').toggleClass('content-body__sidebar-animation-in');
    $('.content-body__workspace').toggleClass('content-body__workspace_no-sidebar');
    $(this).toggleClass('extra-widget-toggle_rotate');
});

$('.extra-widget-item').click(function(){
    $('.content-body__sidebar').removeClass('content-body__sidebar-animation-in');
    $('.content-body__workspace').removeClass('content-body__workspace_no-sidebar');
    $('.js-toggle-slide').removeClass('extra-widget-toggle_rotate');
});

$('[data-toggle="tab"]').tooltip({
    trigger: 'hover',
    placement: 'left',
    animate: true,
});