[h:Token = "Lib:ca.rlw")]
[h: season_map = getLibProperty("season_map","Lib:ca.rlw")]
[h: currentSeason=getLibProperty("season","Lib:ca.rlw")]
[h: currWeather=getLibProperty("currentWeather","Lib:ca.rlw")]
[h: old_x = json.get(currWeather,"x")]
[h: old_y = json.get(currWeather,"y")]
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

[h: currWeather=json.set(currWeather,"x",new_x)]
[h: currWeather=json.set(currWeather,"y",new_y)]
[h: setLibProperty("currentWeather",currWeather,"Lib:ca.rlw")]
[h: ca.rlw.updateUI()]