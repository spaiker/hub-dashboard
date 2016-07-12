$( document ).ready(function() {
    $(".js-circle-disk").circliful({
        animationStep: 5,
        foregroundColor: "#55a8fd",
        backgroundColor: "#d9e4eb",
        foregroundBorderWidth: 10,
        backgroundBorderWidth: 10,
        percent: 50,
        textUnits: ' gb',
        captionText: 'disk',
        totalText: '250'
    });
    $(".js-circle-ram").circliful({
        animationStep: 5,
        foregroundColor: "#52dc90",
        backgroundColor: "#d9e4eb",
        foregroundBorderWidth: 10,
        backgroundBorderWidth: 10,
        percent: 4,
        textUnits: ' gb',
        captionText: 'ram',
        totalText: '8'
    });
    $(".js-circle-cpu").circliful({
        animationStep: 5,
        foregroundColor: "#718bb7",
        backgroundColor: "#d9e4eb",
        foregroundBorderWidth: 10,
        backgroundBorderWidth: 10,
        percent: 2,
        textUnits: ' cores',
        captionText: 'cpu',
        totalText: '6'
    });

    $(function () {
        eval($('#code').text());
    });

    Morris.Donut({
        element: 'graph',
        data: [
            {value: 70, label: 'foo'},
            {value: 20, label: 'bar'},
            {value: 10, label: 'baz'},
        ],
        backgroundColor: '#fff',
        labelColor: '#697490',
        colors: [
            '#52dc90',
            '#55a8fd',
            '#718bb7',
        ],
        formatter: function (x) { return x + "%"}
    });
});
