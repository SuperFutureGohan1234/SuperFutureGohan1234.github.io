/* global $ */

function tempConvert(valNum) {
  valNum = parseFloat(valNum);
  return ((valNum-273.15)*1.8)+32; 
}

function generateIcon(id) {
  var prefix = 'wi wi-';
  var icon = iconMap[id].icon;

  // If we are not in the ranges mentioned above, add a day/night prefix.
  if (!(id > 699 && id < 800) && !(id > 899 && id < 1000)) {
    icon = 'day-' + icon;
  } 
 
  else  {  [
    rain="https://media.giphy.com/media/3oz8xVUm3mOvsSRqUg/giphy.gif"
    ]; 
      

  // Finally tack on the prefix.
  return icon = prefix + icon;
  }
}


$('#submit').click(function() {
    $.ajax({
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?zip=" + $("#zipInput").val() + ",us&APPID=b63c21ba1c2132722cab7cd4298f807d",
        success: function(data) {
            var weatherId = data.weather[0].id;
            $("#results").html(
                "<div class='text-center'>" +
                
                    "<span><i class='" + generateIcon(weatherId) + "'></i></span>" + 
                    
                    "<h1 class='bluetext'>"+ data.name +"</h1>" + 
                    
                    "<h2 class='whitetext'>"+ Math.round(tempConvert(data.main.temp)) +  "&#8457; </h2>" +
                    
                     "<h2 class='whitetext'>"+ iconMap[weatherId].label +"</h2>" + 
                     
                     "<h4 class='whitetext'>Humidity: " + data.main.humidity + "%</h4>" + 
                     
                     "<h4 class='whitetext'>Wind Speed: "+ data.wind.speed + "mph</h4>" + 
                    
                "</div>"
                
                
            )
        }
    }).then(function(){
        $("#zipInput").val("");
    })
});
