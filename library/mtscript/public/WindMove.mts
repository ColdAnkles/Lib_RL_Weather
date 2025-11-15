[h:Token = "Lib:ca.rlw"]
[h: season_map = getLibProperty("season_map","Lib:ca.rlw")]
[h: currentSeason=getLibProperty("season","Lib:ca.rlw")]
[h: currWind=getLibProperty("currentWind","Lib:ca.rlw")]
[h: old_x = json.get(currWind,"x")]
[h: old_y = json.get(currWind,"y")]
[h: monthMovement=json.get(json.get(season_map,currentSeason),"move")]
[h: condition=json.contains(macro.args,"roll")]
[h, if(!condition), code:{
	[h: roll=roll(2,6)]
};{
	[h: roll=json.get(macro.args,"roll")]
}]
[h: moveMap = getLibProperty(monthMovement,"Lib:ca.rlw")]
[h: move_x=json.get(json.get(moveMap,roll),"x")]
[h: move_y=json.get(json.get(moveMap,roll),"y")]
[h: new_x=old_x+move_x]
[h: new_y=old_y+move_y]

[h: coordWrapData = json.set("{}","oldX",old_x,"oldY",old_y,"newX",new_x,"newY",new_y)]
[MACRO("WeatherCoordinateWrap@Lib:ca.rlw"): coordWrapData]

[h: new_x = json.get(macro.return,"newX")]
[h: new_y = json.get(macro.return,"newY")]

[h: currWind=json.set(currWind,"x",new_x)]
[h: currWind=json.set(currWind,"y",new_y)]
[h: setLibProperty("currentWind",currWind,"Lib:ca.rlw")]
[h: ca.rlw.updateUI()]