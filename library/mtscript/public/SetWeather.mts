[h:Token = "Lib:ca.rlw")]
[h: newX = json.get(macro.args,"x")]
[h: newY = json.get(macro.args,"y")]
[h: currWeather=getLibProperty("currentWeather","Lib:ca.rlw")]
[h: currWeather = json.set(currWeather,"x",newX)]
[h: currWeather = json.set(currWeather,"y",newY)]
[h: setLibProperty("currentWeather",currWeather,"Lib:ca.rlw")]
[h: ca.rlw.updateUI()]