$(document).ready(function() {

    $("#countdown").countdown("2016/02/03 18:30:00", function(event) {
        $(this).text(event.strftime('%H:%M:%S'));
    }).on('finish.countdown', function() {
        $('.container').append('<video id="quip" src="https://quipvid.s3.amazonaws.com/1875380439cd03c4cd7b43ddb5c66cd0.mp4" poster="https://s3.amazonaws.com/quipvid/2ffcf67e623fefb1f946d88fd0f2b59b_1.jpg" />');
        $('#quip').animateCSS('slideInDown', function(){
            document.getElementById("quip").play();
        });
    });

});
