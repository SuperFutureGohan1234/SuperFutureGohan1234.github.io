/* global $ */

$('#submit').click(function() {
    $.ajax({
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?zip=" + $("#zipInput").val() + ",us&APPID=b63c21ba1c2132722cab7cd4298f807d",
        success: function(data) {
            $("#results").html(
                "<div>" +
                    "<img src=http://openweathermap.org/img/w/" + data.weather[0].icon + ".png />" + 
                "</div>" +
                "<div>" +
                    "<pre>" + JSON.stringify(data,null,4) + "</pre>" +
                "</div>"
            )
        }
    }).then(function(){
        $("#zipInput").val("");
    })
});
