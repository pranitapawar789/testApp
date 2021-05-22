$(document).ready(function() {
    $('.accordion-toggle').on('click', function() {
    	var accordion = $(this);
    	var accordionContent = accordion.next('.accordion-content');
    	accordion.toggleClass("open");
    	accordionContent.slideToggle(250);
    });
    var i;
    function createList()  {
        for (i=0; i<2; i++) {
            $(".info-steps").append($(".info-steps").children().first().clone());
        }
    }
    function doctorInfo() {
        for (i=0; i<1; i++) {
            $(".doc-info").append($(".doc-info").children().first().clone());
        }
    }
    function repeatDiv() {
        for (i=0; i<5; i++) {
            $(".repeatDiv").append($(".repeatDiv").children().first().clone());
        }
    }


    $(".test-slider").slick({
        arrows: true,
        infinite: true,
        autoplaySpeed: 500,
        autoplay: true,
        slidesToScroll: 2,
        slidesToShow: 2
    });


    createList();
    doctorInfo();
    repeatDiv();
})