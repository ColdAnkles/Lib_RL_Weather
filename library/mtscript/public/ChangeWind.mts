
[h:Token = "Lib:ca.rlw")]

[h, if(json.contains(macro.args,"submit")), code:{
	[h: sendData = json.get(macro.args,"submitData")]
	[MACRO("SetWind@Lib:ca.rlw"): sendData]
	[h: vis =  isDialogVisible("Change Wind")]
	[h, if(vis), code:{
		[h: closeDialog("Change Wind")]
	}]
	[h: return(0)]
	[h: ca.rlw.updateUI()]
};{}]

[h, if(json.contains(macro.args,"move_button")), code:{
	[h: windX=json.get(json.get(macro.args,"move_button"),"x"))]
	[h: windY=json.get(json.get(macro.args,"move_button"),"y"))]
	[h: old_x=json.get(json.get(macro.args,"move_button"),"oldX"))]
	[h: old_y=json.get(json.get(macro.args,"move_button"),"oldY"))]

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
<td>[h: newCoords="{x:"+string(windX)+", y:"+string(windY-1)+", oldX:"+string(windX)+", oldY:"+string(windY)+"}"]<input type='image' src='[r: js.ca.rlw.getImage("up_arrow", true)]' class="northwest" name="move_button" alt="NW" value='[r: newCoords ]' width=190 height=190></input></td>
<td>[h: newCoords="{x:"+string(windX-1)+", y:"+string(windY)+", oldX:"+string(windX)+", oldY:"+string(windY)+"}"]<input type='image' src='[r: js.ca.rlw.getImage("up_arrow", true)]' class="north" name="move_button" alt="N" value='[r: newCoords ]' width=190 height=190></input></td>
<td>[h: newCoords="{x:"+string(windX-1)+", y:"+string(windY+1)+", oldX:"+string(windX)+", oldY:"+string(windY)+"}"]<input type='image' src='[r: js.ca.rlw.getImage("up_arrow", true)]' class="northeast" name="move_button" alt="NE" value='[r: newCoords]' width=190 height=190></input></td>
</tr>
<tr>
<td></td>
<td width=1 height=1>[r: wind]<br /><img src='[r: js.ca.rlw.getImage(wind, true)]' class="center" width=190 height=190></img></td>
<td></td>
</tr>
<tr>
<td>[h: newCoords="{x:"+string(windX+1)+", y:"+string(windY-1)+", oldX:"+string(windX)+", oldY:"+string(windY)+"}"]<input type= 'image' src='[r: js.ca.rlw.getImage("up_arrow", true)]' class="southwest" name="move_button" alt="NW" value='[r: newCoords ]' width=190 height=190></input></td>
<td>[h: newCoords="{x:"+string(windX+1)+", y:"+string(windY)+", oldX:"+string(windX)+", oldY:"+string(windY)+"}"]<input type= 'image' src='[r: js.ca.rlw.getImage("up_arrow", true)]' class="south" name="move_button" alt="NW" value='[r: newCoords ]' width=190 height=190></input></td>
<td>[h: newCoords="{x:"+string(windX)+", y:"+string(windY+1)+", oldX:"+string(windX)+", oldY:"+string(windY)+"}"]<input type= 'image' src='[r: js.ca.rlw.getImage("up_arrow", true)]' class="southeast" name="move_button" alt="NW" value='[r: newCoords ]' width=190 height=190></input></td>
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
