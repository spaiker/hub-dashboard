$(".js-btn-minimize").click(function(){
    $(".sidebar_left").toggleClass("sidebar-minimize");
    $(".header").toggleClass("header-minimize");
    $(".content").toggleClass("content-minimize");
});

$(function() {
    $('.dropdown').dropdown(
        {
            transition: 'fade'
        }
    );

    $('.sidebar_right').sidebar('setting', 'transition', 'overlay')
        .sidebar('attach events', '.js-chat-btn');

    $('.tabular.menu .item').tab();

    $('.ui.rating.rating-disabled').rating('disable');

    $('.button').popup({
        inline     : true,
        hoverable  : true,
        position   : 'bottom center',
        delay: {
            show: 300,
            hide: 800
        }
    });

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

    $('.js-scroll-sidebar').slimScroll({
        color: '#697490',
        opacity: '1',
        size: '5px',
        height: '100%',
        railVisible: true,
        railColor: '#697490',
        railOpacity: '0.4',
        position: 'right',
        distance: '1px',
        wrapperClass: "slimScrollDiv"
    });
});

function initColorbox() {
    $.colorbox.remove();
    $('a.js-cbox-modal-inline').colorbox({
        inline: true,
        title: " ",
        transition: "none",
        previous: false,
        next: false,
        arrowKey: false,
        rel: false,
        overlayClose: true,
        opacity: 0.8,
        closeButton: false,
        onComplete: function () {
            $.colorbox.resize();
        }
    });
}

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

new Calendar({
    element: $('.js-daterange_double'),
    earliest_date: 'January 1, 2000',
    latest_date: new Date(),
    start_date: 'May 1, 2015',
    end_date: 'May 31, 2015',
    presets: false,
    callback: function() {
        var start = moment(this.start_date).format('ll'),
            end = moment(this.end_date).format('ll');

        console.debug('Start Date: '+ start +'\nEnd Date: '+ end);
    }
});

$(document).ready(function(evt) {
    var svgns = 'http://www.w3.org/2000/svg',
        xlinkns = 'http://www.w3.org/1999/xlink',
        use = document.createElementNS(svgns, 'use');

    use.setAttributeNS(xlinkns, 'xlink:href', '#save');
    document.getElementById('useSVG').appendChild(use);
});