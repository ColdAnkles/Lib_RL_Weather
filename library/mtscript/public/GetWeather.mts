[h:Token = "Lib:ca.rlw"]
[h, if(macro.args==""), code:{
    [h: currentWeather = getLibProperty("currentWeather",Token)]
    [h: currWeather_x = json.get(currentWeather,"x")]
    [h: currWeather_y = json.get(currentWeather,"y")]
};{
    [h: currWeather_x = json.get(macro.args,"x")]
    [h: currWeather_y = json.get(macro.args,"y")]
}]
[h: currentSeason=getLibProperty("season","Lib:ca.rlw")]
[h: season_map = getLibProperty("season_map","Lib:ca.rlw")]
[h: seasonFlower=getLibProperty(json.get(json.get(season_map,currentSeason),"flower"),"Lib:ca.rlw")]
[h: currWeather=json.get(json.get(json.get(seasonFlower,string(currWeather_x)),string(currWeather_y)),"weather")]
[h: macro.return=json.set("{}","weather",currWeather,"x",currWeather_x,"y",currWeather_y)]