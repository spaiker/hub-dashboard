$(".js-btn-minimize").click(function(){
    $(".sidebar_left").toggleClass("js-sidebar-minimize");
    $(".sidebar-menu__item a").toggleClass("tooltipped");
    $(".header").toggleClass("js-header-minimize");
    $(".content").toggleClass("js-content-minimize");
});

$(function() {
    $('.ui.dropdown').dropdown(
        {
            transition: 'fade'
        }
    );

    $('.sidebar_right').sidebar('setting', 'transition', 'overlay')
        .sidebar('attach events', '.js-chat-btn');

    $('.tabular.menu .item').tab();
});

$('.js-chat-carousel').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    rtl: false
});

$(".chat-sound__link").click(function(){
    $(this).toggleClass("chat-sound__link_off");
});

$(function(){
    $('.js-scroll-content').slimScroll({
        color: '#d4d9e3',
        opacity: '1',
        size: '5px',
        height: 'calc(100% - 51px)',
        railVisible: true,
        railColor: '#d4d9e3',
        railOpacity: '0.4',
        position: 'right',
        distance: '1px',
        wrapperClass: "content__body-wrapper"
    });
    $('.js-scroll-content').css("height", "100%");

    $('.js-dark-scroll').slimScroll({
        color: '#d4d9e3',
        opacity: '1',
        size: '5px',
        height: 'calc(100% - 119px)',
        railVisible: true,
        railColor: '#d4d9e3',
        railOpacity: '0.4',
        position: 'right',
        distance: '5px',
        wrapperClass: "slimScrollDiv"
    });
    $('.js-dark-scroll').css("height", "100%");

    $('.js-dark-scroll_rooms').slimScroll({
        color: '#d4d9e3',
        opacity: '1',
        size: '5px',
        height: 'calc(100% - 50px)',
        railVisible: true,
        railColor: '#d4d9e3',
        railOpacity: '0.4',
        position: 'right',
        distance: '1px',
        wrapperClass: "slimScrollDiv"
    });
    $('.js-dark-scroll_rooms').css("height", "100%");
});


$(document).ready(function() {
    $('.js-datatable').DataTable(
        {   "bInfo": false,
            "dom": '<"top"fi>rt<"bottom"lp><"clear">'
        }
    );
} );

jQuery(document).ready(function($) {
    $(".js-table-clickable").click(function() {
        window.document.location = $(this).data("href");
    });
});

