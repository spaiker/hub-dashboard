$(document).ready(function() {
    $(".js-btn-minimize").click(function(){
        $(".sidebar_left").toggleClass("sidebar-minimize");
        $(".header").toggleClass("header-minimize");
        $(".content").toggleClass("content-minimize");
    });

    $(".js-btn-pgp").click(function(){
        $(".modal__forms-wrapper").removeClass("modal__forms-wrapper_input-btn");
        $(this).remove();
        $(".modal__forms-wrapper_hidden").addClass("show");
    });

    $(".js-btn-change-password").click(function(){
        $('.modal__forms-wrapper_password-btn').remove();
        $(".modal__forms-wrapper_password-hidden").addClass("show");
    });

    $('.sidebar_right').sidebar('setting', 'transition', 'overlay')
        .sidebar('attach events', '.js-chat-btn');

    $('.tabular.menu .item').tab();
    $('.ui.rating').rating();
    $('.ui.rating.rating-disabled').rating('disable');

    $('.dropdown-toggle').dropdown();

    $('[data-toggle="tooltip"]').tooltip({
        animation: true
    });
    $('[data-inverted]').hover(function(){
        $('.tooltip').addClass('tooltip-inverted');
    });

    $("[data-toggle='popover']").popover({
        container: 'body',
        trigger: 'click'
    });
    $(document).on('click', function (e) {
        $('[data-toggle="popover"],[data-original-title]').each(function () {
            //the 'is' for buttons that trigger popups
            //the 'has' for icons within a button that triggers a popup
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                (($(this).popover('hide').data('bs.popover')||{}).inState||{}).click = false  // fix for BS 3.3.6
            }

        });
    });

    $(".js-map-toggle").click(function(){
        $(".content-body-workspace__table").toggleClass("content-body-workspace__table_down");
    });

    $(".js-expand-description").click(function(){
        $(".details-description__item").toggleClass("details-description__item_expand");
        $(".js-expand-description .hb").toggleClass("hb-angle-down hb-angle-up");
        $(".content").toggleClass("content_overflow-blocked");
    });

    $('.js-select-widget-no-search').chosen({disable_search_threshold: 10});
    $('.js-select-widget').chosen();

    var inputOptions = new Promise(function(resolve) {
        setTimeout(function() {
            resolve({
                '#ff0000': 'Red',
                '#00ff00': 'Green',
                '#0000ff': 'Blue'
            })
        }, 2000)
    });

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

    $('.js-scroll').slimScroll({
        color: '#d4d9e3',
        opacity: '1',
        size: '5px',
        height: '100%',
        railVisible: true,
        railColor: '#d4d9e3',
        railOpacity: '0.4',
        position: 'right',
        distance: '1px'
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

    $('.js-datatable').DataTable(
        {   "bInfo": false,
            "dom": '<"top"fi>rt<"bottom"lp><"clear">'
        }
    );
    $(".js-table-clickable").click(function() {
        window.document.location = $(this).data("href");
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

    $('.js-chat-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        infinite: false,
        nextArrow: '<div class="chat-slider__button"><a href="#" data-role="none"  class="chat-slider-button" aria-label="Previous" tabindex="0" role="button"><i class="hb hb-angle-right"></i></a></div>',
        prevArrow: '<div class="chat-slider__button"><a href="#" data-role="none"  class="chat-slider-button" aria-label="Next" tabindex="0" role="button""><i class="hb hb-angle-left"></i></a></div>'
    });
    $( ".js-slide-panel" ).simplerSidebar( {
            align: "left",
            top: 130,
            selectors: {
                trigger: ".js-slide-open",
                quitter: ".js-slide-close"
            },
            sidebar: {
                width: 250
            },
            mask: {
                display: false
            },
            events: {
                callbacks: {
                    animation: {
                        freezePage: false
                    }
                }
            }
        } );


    /*    swal({
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
        })*/
});