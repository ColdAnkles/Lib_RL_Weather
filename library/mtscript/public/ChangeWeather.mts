
[h:Token = "Lib:ca.rlw")]

[h, if(json.contains(macro.args,"submit")), code:{
	[h: sendData = json.get(macro.args,"submitData")]
	[MACRO("SetWeather@Lib:ca.rlw"): sendData]
	[h: vis =  isDialogVisible("Change Weather")]
	[h, if(vis), code:{
		[h: closeDialog("Change Weather")]
	}]
	[h: return(0)]
	[h: ca.rlw.updateUI()]
};{}]

[h, if(json.contains(macro.args,"move_button")), code:{
	[h: weatherX=json.get(json.get(macro.args,"move_button"),"x"))]
	[h: weatherY=json.get(json.get(macro.args,"move_button"),"y"))]
	[h: old_x=json.get(json.get(macro.args,"move_button"),"oldX"))]
	[h: old_y=json.get(json.get(macro.args,"move_button"),"oldY"))]

	[h: coordWrapData = json.set("{}","oldX",old_x,"oldY",old_y,"newX",weatherX,"newY",weatherY)]
	[MACRO("WeatherCoordinateWrap@Lib:ca.rlw"): coordWrapData]
	[h: weatherX = json.get(macro.return,"newX")]
	[h: weatherY = json.get(macro.return,"newY")]
	[h: currentSeason=getLibProperty("season","Lib:ca.rlw")]
[h: season_map = getLibProperty("season_map","Lib:ca.rlw")]
	[h: seasonFlower=getLibProperty(json.get(json.get(season_map,currentSeason),"flower"),"Lib:ca.rlw")]
	[h: weather=json.get(json.get(json.get(seasonFlower,string(weatherX)),string(weatherY)),"weather")]
};{
	[MACRO("GetWeather@Lib:ca.rlw"): ""]
	[h: weather=json.get(macro.return,"weather")]
	[h: weatherX=number(json.get(macro.return,"x"))]
	[h: weatherY=number(json.get(macro.return,"y"))]
}]
[dialog5("Change Weather","width=640; height=700; closeButton=0; temporary=1;"):{
<html>
<head>
<link rel="stylesheet" type="text/css" href="lib://ca.rlw/css/hexagon.css">
</head>
<body>
[h: changeWeatherMacro = macroLinkText("ChangeWeather@Lib:ca.rlw", "all","",Token)]
<form name="changeWeather" action="[r:changeWeatherMacro]">
<table class='center'>
<tr>
<td>[h: newCoords="{x:"+string(weatherX)+", y:"+string(weatherY-1)+", oldX:"+string(weatherX)+", oldY:"+string(weatherY)+"}"]<input type='image' src='[r: js.ca.rlw.getImage("up_arrow", true)]' class="northwest" name="move_button" alt="NW" value='[r: newCoords ]' width=190 height=190></input></td>
<td>[h: newCoords="{x:"+string(weatherX-1)+", y:"+string(weatherY)+", oldX:"+string(weatherX)+", oldY:"+string(weatherY)+"}"]<input type='image' src='[r: js.ca.rlw.getImage("up_arrow", true)]' class="north" name="move_button" alt="N" value='[r: newCoords ]' width=190 height=190></input></td>
<td>[h: newCoords="{x:"+string(weatherX-1)+", y:"+string(weatherY+1)+", oldX:"+string(weatherX)+", oldY:"+string(weatherY)+"}"]<input type='image' src='[r: js.ca.rlw.getImage("up_arrow", true)]' class="northeast" name="move_button" alt="NE" value='[r: newCoords]' width=190 height=190></input></td>
</tr>
<tr>
<td></td>
<td width=1 height=1>[r: weather]<br /><img src='[r: js.ca.rlw.getImage(weather, true)]' class="center" width=190 height=190></img></td>
<td></td>
</tr>
<tr>
<td>[h: newCoords="{x:"+string(weatherX+1)+", y:"+string(weatherY-1)+", oldX:"+string(weatherX)+", oldY:"+string(weatherY)+"}"]<input type= 'image' src='[r: js.ca.rlw.getImage("up_arrow", true)]' class="southwest" name="move_button" alt="NW" value='[r: newCoords ]' width=190 height=190></input></td>
<td>[h: newCoords="{x:"+string(weatherX+1)+", y:"+string(weatherY)+", oldX:"+string(weatherX)+", oldY:"+string(weatherY)+"}"]<input type= 'image' src='[r: js.ca.rlw.getImage("up_arrow", true)]' class="south" name="move_button" alt="NW" value='[r: newCoords ]' width=190 height=190></input></td>
<td>[h: newCoords="{x:"+string(weatherX)+", y:"+string(weatherY+1)+", oldX:"+string(weatherX)+", oldY:"+string(weatherY)+"}"]<input type= 'image' src='[r: js.ca.rlw.getImage("up_arrow", true)]' class="southeast" name="move_button" alt="NW" value='[r: newCoords ]' width=190 height=190></input></td>
</tr>
<tr>
<td></td>
<td>[h: newCoords="{x:"+string(weatherX)+", y:"+string(weatherY)+"}"]
<input type="hidden" name="submitData" value='[r: newCoords]'></input>
<input type="submit" name="submit" value="Set Weather"></input></td>
<td></td>
</tr>
</table>
</form>
</body>
</html>
}]
