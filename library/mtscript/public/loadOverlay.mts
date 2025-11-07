[h: weather=ca.rlw.GetWeather()]
[h: wind=ca.rlw.GetWind()]
[h: weatherIcon = json.get(weather,"weather")]
[h: windIcon = json.get(wind,"wind")]
[h: overlayDisabled = getLibProperty("overlayDisabled","Lib:ca.rlw")]
[h, if(overlayDisabled==""), code:{
	[h: setLibProperty("overlayDisabled",false,"Lib:ca.rlw")]
	[h: overlayDisabled=false]
};{}]
[h, if(overlayDisabled), code:{
	[h: closeOverlay("rlWeatherOverlay")]
	[h: return(1,0)]
};{}]
[overlay("rlWeatherOverlay"):{
<html>
<table style='color:white;text-align:center;float:right'>
	<tr><td style='background-color:black'>[r: replace(json.get(weather,"weather"),"_"," ")]</td><td style='background-color:black'>[r: replace(json.get(wind,"wind"),"_"," ")]</td><td width=100></td></tr>
	<tr><td style='background-color:white'><img src='[r: js.ca.rlw.getImage(weatherIcon, true)]' class="center" width=75 height=75></img></td><td style='background-color:white'><img src='[r: js.ca.rlw.getImage(windIcon, true)]' class="center" width=75 height=75></img></td><td width=100></td></tr>
</table>
</html>
}]