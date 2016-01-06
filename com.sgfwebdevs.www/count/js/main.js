$(document).ready(function() {

    $("#countdown").countdown("2016/01/06 18:30:00", function(event) {
        $(this).text(event.strftime('%H:%M:%S'));
    }).on('finish.countdown', function() {
        $('.container').append('<video id="quip" src="https://quipvid.s3.amazonaws.com/cc01920c07e817fdacc0950c8fe58cda.mp4" poster="https://s3.amazonaws.com/quipvid/ca6223ebe8b72bce3ea4c1fcc4bd5d0c_1.jpg" />');
        $('#quip').animateCSS('slideInDown', function(){
            document.getElementById("quip").play();
        });
    });

});
