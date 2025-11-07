
[h:Token = "Lib:ca.rlw"]

[h, if(json.contains(macro.args,"submit")), code:{
	[h: sendData = json.get(macro.args,"submitData")]
	[MACRO("SetWind@Lib:ca.rlw"): sendData]
	[h: vis =  isDialogVisible("Change Wind")]
	[h, if(vis), code:{
		[h: closeDialog("Change Wind")]
	}]
	[h: ca.rlw.updateUI()]
	[h: return(0,"")]
};{}]

[h, if(json.contains(macro.args,"move_button")), code:{
	[h: windX=json.get(json.get(macro.args,"move_button"),"x")]
	[h: windY=json.get(json.get(macro.args,"move_button"),"y")]
	[h: old_x=json.get(json.get(macro.args,"move_button"),"oldX")]
	[h: old_y=json.get(json.get(macro.args,"move_button"),"oldY")]

	[h: coordWrapData = json.set("{}","oldX",old_x,"oldY",old_y,"newX",windX,"newY",windY)]
	[MACRO("WeatherCoordinateWrap@Lib:ca.rlw"): coordWrapData]
	[h: windX = json.get(macro.return,"newX")]
	[h: windY = json.get(macro.return,"newY")]
	[h: currentSeason=getLibProperty("season","Lib:ca.rlw")]
	[h: season_map = getLibProperty("season_map","Lib:ca.rlw")]
	[h: seasonFlower=getLibProperty(json.get(json.get(season_map,currentSeason),"flower"),"Lib:ca.rlw")]
	[h: wind=json.get(json.get(json.get(seasonFlower,string(windX)),string(windY)),"wind")]
};{
	[MACRO("GetWind@Lib:ca.rlw"): ""]
	[h: wind=json.get(macro.return,"wind")]
	[h: windX=number(json.get(macro.return,"x"))]
	[h: windY=number(json.get(macro.return,"y"))]
}]



[h: nwCoords = json.set("{}","newX",windX,"newY",windY-1,"oldX",windX,"oldY",windY)]
[MACRO("WeatherCoordinateWrap@Lib:ca.rlw"): nwCoords]
[h: nwCoords = json.set("{}","x",json.get(macro.return,"newX"),"y",json.get(macro.return,"newY"))]
[MACRO("GetWind@Lib:ca.rlw"): nwCoords]
[h: nwwind = json.get(macro.return,"wind")]

[h: nCoords = json.set("{}","newX",windX-1,"newY",windY,"oldX",windX,"oldY",windY)]
[MACRO("WeatherCoordinateWrap@Lib:ca.rlw"): nCoords]
[h: nCoords = json.set("{}","x",json.get(macro.return,"newX"),"y",json.get(macro.return,"newY"))]
[MACRO("GetWind@Lib:ca.rlw"): nCoords]
[h: nwind = json.get(macro.return,"wind")]

[h: neCoords = json.set("{}","newX",windX-1,"newY",windY+1,"oldX",windX,"oldY",windY)]
[MACRO("WeatherCoordinateWrap@Lib:ca.rlw"): neCoords]
[h: neCoords = json.set("{}","x",json.get(macro.return,"newX"),"y",json.get(macro.return,"newY"))]
[MACRO("GetWind@Lib:ca.rlw"): neCoords]
[h: newind = json.get(macro.return,"wind")]

[h: swCoords = json.set("{}","newX",windX+1,"newY",windY-1,"oldX",windX,"oldY",windY)]
[MACRO("WeatherCoordinateWrap@Lib:ca.rlw"): swCoords]
[h: swCoords = json.set("{}","x",json.get(macro.return,"newX"),"y",json.get(macro.return,"newY"))]
[MACRO("GetWind@Lib:ca.rlw"): swCoords]
[h: swwind = json.get(macro.return,"wind")]

[h: sCoords = json.set("{}","newX",windX+1,"newY",windy,"oldX",windX,"oldY",windY)]
[MACRO("WeatherCoordinateWrap@Lib:ca.rlw"): sCoords]
[h: sCoords = json.set("{}","x",json.get(macro.return,"newX"),"y",json.get(macro.return,"newY"))]
[MACRO("GetWind@Lib:ca.rlw"): sCoords]
[h: swind = json.get(macro.return,"wind")]

[h: seCoords = json.set("{}","newX",windX,"newY",windY+1,"oldX",windX,"oldY",windY)]
[MACRO("WeatherCoordinateWrap@Lib:ca.rlw"): seCoords]
[h: seCoords = json.set("{}","x",json.get(macro.return,"newX"),"y",json.get(macro.return,"newY"))]
[MACRO("GetWind@Lib:ca.rlw"): seCoords]
[h: sewind = json.get(macro.return,"wind")]

[dialog5("Change Wind","width=640; height=700; closeButton=0; temporary=1;"):{
<html>
<head>
<link rel="stylesheet" type="text/css" href="lib://ca.rlw/css/hexagon.css">
</head>
<body>
[h: changeWindMacro = macroLinkText("ChangeWind@Lib:ca.rlw", "all","",Token)]
<form name="changeWind" action="[r:changeWindMacro]">
<table class='center'>
<tr>
<td>[h: newCoords="{x:"+string(windX)+", y:"+string(windY-1)+", oldX:"+string(windX)+", oldY:"+string(windY)+"}"]<input type='image' src='[r: js.ca.rlw.getImage(neWind, true)]' class="northwest" name="move_button" alt="NW" value='[r: newCoords ]' width=190 height=190></input></td>
<td>[h: newCoords="{x:"+string(windX-1)+", y:"+string(windY)+", oldX:"+string(windX)+", oldY:"+string(windY)+"}"]<input type='image' src='[r: js.ca.rlw.getImage(nWind, true)]' class="north" name="move_button" alt="N" value='[r: newCoords ]' width=190 height=190></input></td>
<td>[h: newCoords="{x:"+string(windX-1)+", y:"+string(windY+1)+", oldX:"+string(windX)+", oldY:"+string(windY)+"}"]<input type='image' src='[r: js.ca.rlw.getImage(nwWind, true)]' class="northeast" name="move_button" alt="NE" value='[r: newCoords]' width=190 height=190></input></td>
</tr>
<tr>
<td></td>
<td width=1 height=1>[r: wind]<br /><img src='[r: js.ca.rlw.getImage(wind, true)]' class="center" width=190 height=190></img></td>
<td></td>
</tr>
<tr>
<td>[h: newCoords="{x:"+string(windX+1)+", y:"+string(windY-1)+", oldX:"+string(windX)+", oldY:"+string(windY)+"}"]<input type= 'image' src='[r: js.ca.rlw.getImage(swWind, true)]' class="southwest" name="move_button" alt="NW" value='[r: newCoords ]' width=190 height=190></input></td>
<td>[h: newCoords="{x:"+string(windX+1)+", y:"+string(windY)+", oldX:"+string(windX)+", oldY:"+string(windY)+"}"]<input type= 'image' src='[r: js.ca.rlw.getImage(sWind, true)]' class="south" name="move_button" alt="NW" value='[r: newCoords ]' width=190 height=190></input></td>
<td>[h: newCoords="{x:"+string(windX)+", y:"+string(windY+1)+", oldX:"+string(windX)+", oldY:"+string(windY)+"}"]<input type= 'image' src='[r: js.ca.rlw.getImage(seWind, true)]' class="southeast" name="move_button" alt="NW" value='[r: newCoords ]' width=190 height=190></input></td>
</tr>
<tr>
<td></td>
<td>[h: newCoords="{x:"+string(windX)+", y:"+string(windY)+"}"]
<input type="hidden" name="submitData" value='[r: newCoords]'></input>
<input type="submit" name="submit" value="Set Wind"></input></td>
<td></td>
</tr>
</table>
</form>
</body>
</html>
}]
