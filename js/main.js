$(".js-btn-minimize").click(function(){
    $(".sidebar_left").toggleClass("sidebar-minimize");
    $(".header").toggleClass("header-minimize");
    $(".content").toggleClass("content-minimize");
});
$(function() {
    $(".js-btn-pgp").click(function(){
        $(".modal__forms-wrapper").removeClass("modal__forms-wrapper_input-btn");
        $(this).remove();
        $(".modal__forms-wrapper_hidden").addClass("show");
    });
    $(".js-btn-change-password").click(function(){
        $('.modal__forms-wrapper_password-btn').remove();
        $(".modal__forms-wrapper_password-hidden").addClass("show");
    });
});
$(function() {
    $('.sidebar_right').sidebar('setting', 'transition', 'overlay')
        .sidebar('attach events', '.js-chat-btn');

    $('.tabular.menu .item').tab();
    $('.ui.rating').rating();
    $('.ui.rating.rating-disabled').rating('disable');


});
$(function() {
    $('.dropdown-toggle').dropdown();

    $('[data-toggle="tooltip"]').tooltip({
        animation: true
    });
    $('[data-inverted]').hover(function(){
        $('.tooltip').addClass('tooltip-inverted');
    });

    $("[data-toggle='popover']").popover();
});

// inputOptions can be an object or Promise
var inputOptions = new Promise(function(resolve) {
    setTimeout(function() {
        resolve({
            '#ff0000': 'Red',
            '#00ff00': 'Green',
            '#0000ff': 'Blue'
        })
    }, 2000)
});
$(".js-map-toggle").click(function(){
    $(".content-body-workspace__table").toggleClass("content-body-workspace__table_down");
});

$(".js-expand-description").click(function(){
    $(".details-description__item").toggleClass("details-description__item_expand");
    $(".js-expand-description .hb").toggleClass("hb-angle-down hb-angle-up");
});


$(function() {
    $(".js-filter-memory").ionRangeSlider(
        {
            type: "single",
            min: 0,
            max: 24,
            step: 8,
            grid: true,
            grid_snap: true,
            postfix: " GB"
        }
    );
    $(".js-filter-disk").ionRangeSlider(
        {
            type: "single",
            min: 0,
            max: 100,
            step: 10,
            grid: true,
            grid_snap: true,
            postfix: " GB"
        }
    );
    $(".js-filter-others").ionRangeSlider(
        {
            type: "double",
            min: 0,
            max: 100,
            step: 10,
            grid: false,
            grid_snap: false,
            prefix: "$"
        }
    );
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
    $('.js-scroll').slimScroll({
        color: '#d4d9e3',
        opacity: '1',
        size: '5px',
        height: '100%',
        railVisible: true,
        railColor: '#d4d9e3',
        railOpacity: '0.4',
        position: 'right',
        distance: '1px',
    });
    $('.js-scroll-content').slimScroll({
        color: '#d4d9e3',
        opacity: '1',
        size: '5px',
        height: 'calc(100% - 66px)',
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

/*Charts from RH detail page*/

var tt = document.createElement('div'),
    leftOffset = -(~~$('html').css('padding-left').replace('px', '') + ~~$('body').css('margin-left').replace('px', '')),
    topOffset = -32;
tt.className = 'ex-tooltip';
document.body.appendChild(tt);

var cpu = {
    "xScale": "time",
    "yScale": "exponential",
    "main": [
        {
            "className": ".pizza",
            "data": [
                {
                    "x": "2012-11-05",
                    "y": 6
                },
                {
                    "x": "2012-11-06",
                    "y": 6
                },
                {
                    "x": "2012-11-07",
                    "y": 8
                },
                {
                    "x": "2012-11-08",
                    "y": 3
                },
                {
                    "x": "2012-11-09",
                    "y": 4
                },
                {
                    "x": "2012-11-10",
                    "y": 9
                },
                {
                    "x": "2012-11-11",
                    "y": 6
                }
            ]
        }
    ]
};
var opts = {
    "dataFormatX": function (x) { return d3.time.format('%Y-%m-%d').parse(x); },
    "tickFormatX": function (x) { return d3.time.format('%a')(x); }
};
var myChart = new xChart('line-dotted', cpu, '#js-chart-cpu', opts);
var myChart = new xChart('line-dotted', cpu, '#js-chart-hdd', opts);
var myChart = new xChart('line-dotted', cpu, '#js-chart-ram', opts);

swal({
    title: 'Select color',
    input: 'radio',
    inputOptions: inputOptions,
    inputValidator: function(result) {
        return new Promise(function(resolve, reject) {
            if (result) {
                resolve()
            } else {
                reject('You need to select something!')
            }
        })
    }
}).then(function(result) {
    swal({
        type: 'success',
        html: 'You selected: ' + result
    })
})
