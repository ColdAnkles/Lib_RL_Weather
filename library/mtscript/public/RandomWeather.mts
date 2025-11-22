[h: changeType = json.get(macro.args, 0)]

[h: autoWeather=getLibProperty("autoWeather","Lib:ca.rlw")]
[h, if(json.get(autoWeather,"enabled")==false), code:{
    [h: abort(0)]
};{}]

[h, if(ca.rlw.isLibraryLoaded("Lib:DateTime")==false), code:{
    [h: abort(0)]
};{}]

[h, if(changeType == "weather"), code:{
    [h: ca.rlw.WeatherMove()]
    [h: eventName = "The Weather Changes"]
    [h: eventDesc = "The Weather Changes"]
};{}]

[h, if(changeType == "wind"), code:{
    [h: ca.rlw.WindMove()]
    [h: eventName = "The Wind Changes"]
    [h: eventDesc = "The Wind Changes"]
};{}]

[h: weatherRoll = 1d6+4]

[MACRO("QuickEvent@Lib:DateTime"): json.set("{}","Save","Save","setEventName",eventName,"setDescription",eventDesc,"autoDelete",json.true,"selectedNumber",weatherRoll,"numberType","Hours","gmOnly",json.true,"setExpire","on","callBack","[h: ca.rlw.RandomWeather('"+changeType+"')]")]