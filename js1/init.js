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
});
function formsubmit(){
   /* $("body").css("background-color","red")*/
}
