[h: weather=ca.rlw.GetWeather()]
[h: wind=ca.rlw.GetWind()]
[h: weatherIcon = json.get(weather,"weather")]
[h: windIcon = json.get(wind,"wind")]
[overlay("rlWeatherOverlay"):{
<html>
<table style='color:white;text-align:center;float:right'>
	<tr><td style='background-color:black'>[r: json.get(weather,"weather")]</td><td style='background-color:black'>[r: json.get(wind,"wind")]</td><td width=100></td></tr>
	<tr><td style='background-color:white'><img src='[r: js.ca.rlw.getImage(weatherIcon, true)]' class="center" width=75 height=75></img></td><td style='background-color:white'><img src='[r: js.ca.rlw.getImage(windIcon, true)]' class="center" width=75 height=75></img></td><td width=100></td></tr>
</table>
</html>
}]