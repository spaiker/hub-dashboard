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
            '#718bb7'
        ],
        formatter: function (x) { return x + "%"}
    });

    $(".dropdown-toggle").click(function(){
        $(".dropdown-menu").toggleClass("dropdown-menu_show");
    });

    Morris.Area({
        element: 'graph-area',
        data: [
            {x: '2010 Q4', y: 3, z: 7},
            {x: '2011 Q1', y: 3, z: 4},
            {x: '2011 Q2', y: null, z: 1},
            {x: '2011 Q3', y: 2, z: 5},
            {x: '2011 Q4', y: 8, z: 2},
            {x: '2012 Q1', y: 4, z: 4}
        ],
        xkey: 'x',
        ykeys: ['y', 'z'],
        labels: ['ONLINE', 'OFFLINE'],
        continuousLine: false,
        fillOpacity: 0.2,
        lineColors: ['#ea5761', '#52dc90'],
        lineWidth: 3,
        pointSize: 5,
        grid: true,
        gridTextColor: '#697490',
        gridTextSize: 12,
        gridTextFamily: '"Encode Sans Narrow", sans-serif',
        smooth: true
    }).on('click', function(i, row){
        console.log(i, row);
    });
});
