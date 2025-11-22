[h: autoWeather=getLibProperty("autoWeather","Lib:ca.rlw")]

[h, if(autoWeather==""), code:{
    [h: autoWeather = json.set("{}","enabled",false)]
};{}]

[h, if(json.get(autoWeather,"enabled")==false), code:{
    [h: autoWeather = json.set(autoWeather,"enabled",true)]
    [h: setLibProperty("autoWeather",autoWeather,"Lib:ca.rlw")]
    [h: ca.rlw.RandomWeather("weather")]
    [h: ca.rlw.RandomWeather("wind")]
};{
    [h: autoWeather = json.set(autoWeather,"enabled",false)]
    [h: setLibProperty("autoWeather",autoWeather,"Lib:ca.rlw")]
}]