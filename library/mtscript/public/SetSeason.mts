[h: seasonList = json.append("[]","Early Spring","Late Spring","Early Summer","Late Summer","Early Autumn","Late Autumn","Early Winter","Late Winter")]
[h, if(json.length(macro.args)==0 || macro.args==""), code:{
    [h: currentSeason = getLibProperty("season","Lib:ca.rlw")]
    [h: seasonIndex = json.indexOf(seasonList, currentSeason)]
    [h: test = input("setSeason|"+seasonList+"|Set Season|LIST|DELIMITER=JSON SELECT="+seasonIndex+" VALUE=STRING")]
    [h: abort(test)]
};{
    [h: setSeason = json.get(macro.args, 0)]
}]
[h: setLibProperty("season",setSeason,"Lib:ca.rlw")]
[h: ca.rlw.updateUI()]