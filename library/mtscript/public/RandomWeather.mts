[h: changeType = json.get(macro.args, 0)]

[h: autoWeather=getLibProperty("autoWeather","Lib:ca.rlw")]
[h, if(json.get(autoWeather,"enabled")==false), code:{
    [h: abort(0)]
};{}]

[h, if(changeType == "weather"), code:{
    [h: ca.rlw.WeatherMove()]
    [h: broadcast("Changed Weather")]
};{}]

[h, if(changeType == "wind"), code:{
    [h: ca.rlw.WindMove()]
    [h: broadcast("Changed Wind")]
};{}]