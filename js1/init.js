$(document).ready(function () {

    $("#img-search").mouseover(function () {
          $("#img-search").attr("src","../img/search3.png");
    });
    $("#img-search").mouseout(function () {
        $("#img-search").attr("src","../img/search2.png");
    });
    $("#img-search").mousedown(function () {
        $("#img-search").attr("src","../img/search4.png");


    });
    $("#person").mouseover(function () {
        $("#person").attr("src","../img/person2.png");
    });
    $("#person").mouseout(function () {
        $("#person").attr("src","../img/person.png");
    });
    $("#message").mouseover(function () {
        $("#message").attr("src","../img/message2.png");
        $(".downdrop").css("display","block");

    });
    $("#message").mouseout(function () {
        $("#message").attr("src","../img/message.png");
        $(".downdrop").css("display","none");
    });
    $(".downdrop").mouseover(function () {
        $(".downdrop").css("display","block");
    });
    $(".downdrop").mouseout(function () {
        $(".downdrop").css("display","none");
    });
    $("#shezhi").mouseover(function () {
        $("#shezhi").attr("src","../img/shezhi2.png");
        $(".downdrop2").css("display","block");

    });
    $("#shezhi").mouseout(function () {
        $("#shezhi").attr("src","../img/shezhi.png");
        $(".downdrop2").css("display","none");
    });
    $(".downdrop2").mouseover(function () {
        $(".downdrop2").css("display","block");
    });
    $(".downdrop2").mouseout(function () {
        $(".downdrop2").css("display","none");
    });

});
function formsubmit(){
   /* $("body").css("background-color","red")*/
}
