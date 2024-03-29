[h:Token = "Lib:ca.rlw"]
[h, if(macro.args==""), code:{
    [h: currentWind = getLibProperty("currentWind",Token)]
    [h: currWind_x = json.get(currentWind,"x")]
    [h: currWind_y = json.get(currentWind,"y")]
};{
    [h: currWind_x = json.get(macro.args,"x")]
    [h: currWind_y = json.get(macro.args,"y")]
}]
[h: currentSeason = getLibProperty("season","Lib:ca.rlw")]
[h: season_map = getLibProperty("season_map","Lib:ca.rlw")]
[h: seasonFlower = getLibProperty(json.get(json.get(season_map,currentSeason),"flower"),"Lib:ca.rlw")]
[h: currWind = json.get(json.get(json.get(seasonFlower,string(currWind_x)),string(currWind_y)),"wind")]
[h: macro.return = json.set("{}","wind",currWind,"x",currWind_x,"y",currWind_y)]