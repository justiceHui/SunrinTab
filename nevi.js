function nevi(place){
    $.ajax({
        url: "http://jhnah917.dothome.co.kr/getLoc.php?place=" + encodeURI(place),
        success: function(fullHtml){
            try {
                window.location.href = "https://www.google.com/maps/dir/" + fullHtml.split(" ").join(",") + "/37.542351,126.9666891";
            }catch(e){}
        }
    });
}


/*$(document).ready(function() {
    nevi("대방현대아파트");
} );*/

let tmp = document.getElementById("in_box_1x1_lft");