$(document).ready(function() {

    $(".clickable1").click(function() {
      $(".image1").toggle();
      $(".whatWeDo1").toggle();
    });
    $(".clickable2").click(function() {
        $(".image2").toggle();
        $(".whatWeDo2").toggle();
    });
      $(".clickable3").click(function() {
        $(".image3").toggle();
        $(".whatWeDo3").toggle();
    });

});

$(document).ready(function () {
        $(".myPortfolio").hover(
            function () {
                $(this)
                    .find(".overlay")
                    .show();
            },
            function () {
                $(this)
                    .find(".overlay")
                    .hide();
            }
        );
  
    $(".one").hover(function () {
        $(".overlay1").show();
    });
    $(".one").mouseleave(function () {
        $(".overlay1").hide();
    });
    $(".two").hover(function () {
        $("#overlay2").show();
    });
    $(".two").mouseleave(function () {
        $("#overlay2").hide();
    });
    $(".three").hover(function () {
        $("#overlay3").show();
    });
    $(".three").mouseleave(function () {
        $("#overlay3").hide();
    });
    $(".four").hover(function () {
        $("#overlay4").show();
    });
    $(".four").mouseleave(function () {
        $("#overlay4").hide();
    });
    $(".five").hover(function () {
        $("#overlay5").show();
    });
    $(".five").mouseleave(function () {
        $("#overlay5").hide();
    });
    $(".six").hover(function () {
        $("#overlay6").show();
    });
    $(".six").mouseleave(function () {
        $("#overlay6").hide();
    });
    $(".seven").hover(function () {
        $("#overlay7").show();
    });
    $(".seven").mouseleave(function () {
        $("#overlay7").hide();
    });
    $(".eight").hover(function () {
        $("#overlay8").show();
    });
    $(".eight").mouseleave(function () {
        $("#overlay8").hide();
    });
    event.preventDefault();
});
