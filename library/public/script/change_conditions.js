"use strict";

function change_conditions(type){
    let currentConditionsCoords = JSON.parse(getLibProperty("ca.rlw", "currentWeather"));
    let currentSeason = getLibProperty("ca.rlw", "season");
    let seasonFlower = JSON.parse(getLibProperty("ca.rlw", JSON.parse(getLibProperty("ca.rlw", "season_map"))[currentSeason]["flower"]));

    let outputHTML = "<html>";
    outputHTML += "<head><link rel='stylesheet' type='text/css' href='lib://ca.rlw/css/hexGrid.css'></head>";
    outputHTML += "<script>\
    var currentPosition = "+JSON.stringify(currentConditionsCoords)+";\
  \
      function changeCondition(position) {\
        let element = document.getElementById(String(position.x) + String(position.y));\
        let oldElement = document.getElementById(String(currentPosition.x) + String(currentPosition.y));\
        element.classList.remove(\"hex\");\
        element.classList.add(\"hex_selected\");\
        oldElement.classList.remove(\"hex_selected\");\
        oldElement.classList.add(\"hex\");\
        currentPosition = position;\
      }\
\
      function doneChanging(type){\
    let uri = \"macro:Change\"\
    if(type==\"weather\"){\
        uri+=\"Weather\";\
    }else{\
        uri+=\"Wind\";\
    }\
    uri+=\"@Lib:ca.rlw\"\
    let r = await fetch(uri, { method: \"POST\", body: currentPosition});\
    }\
    </script>";

    let formAction = "";
    if(type=="weather"){
        formAction = "macro://ChangeWeather@Lib:ca.rlw/self/impersonated?";
    }else{
        formAction = "macro://ChangeWind@Lib:ca.rlw/self/impersonated?";
    }

//<form name='changeConditions' action='"+formAction+"'><div id='hexe'>

    outputHTML += "<table style='overflow:hidden'><tr align='center'><td>\
    <div class='hex_blank hex-row'></div>\
    <div id='-20' class='hex hex-row'><input type='image' onclick='changeCondition({x:-2,y:0})' src='"+getImage(seasonFlower[-2][0][type], true)+"' value='{\"x\":-2,\"y\":0}' name='submit'/></div>\
    <div class='hex_blank hex-row'></div>\
    <div class='even'>\
        <div id='-1-1' class='hex hex-row'><input type='image' onclick='changeCondition({x:-1,y:-1})' src='"+getImage(seasonFlower[-1][-1][type], true)+"' value='{\"x\":-1,\"y\":-1}' name='submit'/></div>\
        <div id='-21' class='hex hex-row'><input type='image' onclick='changeCondition({x:-2,y:1})' src='"+getImage(seasonFlower[-2][1][type], true)+"' value='{\"x\":-2,\"y\":1}' name='submit'/></div>\
        <div class='hex_blank hex-row'></div>\
    </div>\
    <div id='0-2' class='hex hex-row'><input type='image' onclick='changeCondition({x:0,y:-2})' src='"+getImage(seasonFlower[0][-2][type], true)+"' value='{\"x\":0,\"y\":-2}' name='submit'/></div>\
    <div id='-10' class='hex hex-row'><input type='image' onclick='changeCondition({x:-1,y:0})' src='"+getImage(seasonFlower[-1][0][type], true)+"' value='{\"x\":-1,\"y\":0}' name='submit'/></div>\
    <div id='-2-2' class='hex hex-row'><input type='image' onclick='changeCondition({x:-2,y:-2})' src='"+getImage(seasonFlower[-2][2][type], true)+"' value='{\"x\":-2,\"y\":2}' name='submit'/></div>\
    <div class='even'>\
        <div id='-0-1' class='hex hex-row'><input type='image' onclick='changeCondition({x:-0,y:-1})' src='"+getImage(seasonFlower[0][-1][type], true)+"' value='{\"x\":0,\"y\":-1}' name='submit'/></div>\
        <div id='-11' class='hex hex-row'><input type='image' onclick='changeCondition({x:-1,y:1})' src='"+getImage(seasonFlower[-1][1][type], true)+"' value='{\"x\":-1,\"y\":1}' name='submit'/></div>\
        <div class='hex_blank hex-row'></div>\
    </div>\
    <div id='1-2' class='hex hex-row'><input type='image' onclick='changeCondition({x:1,y:-2})' src='"+getImage(seasonFlower[1][-2][type], true)+"' value='{\"x\":1,\"y\":-2}' name='submit'/></div>\
    <div id='00' class='hex hex-row'><input type='image' onclick='changeCondition({x:0,y:0})' src='"+getImage(seasonFlower[0][0][type], true)+"' value='{\"x\":0,\"y\":0}' name='submit'/></div>\
    <div id='-12' class='hex hex-row'><input type='image' onclick='changeCondition({x:-1,y:2})' src='"+getImage(seasonFlower[-1][2][type], true)+"' value='{\"x\":-1,\"y\":2}' name='submit'/></div>\
    <div class='even'>\
        <div id='1-1' class='hex hex-row'><input type='image' onclick='changeCondition({x:1,y:-1})' src='"+getImage(seasonFlower[1][-1][type], true)+"' value='{\"x\":1,\"y\":-1}' name='submit'/></div>\
        <div id='01' class='hex hex-row'><input type='image' onclick='changeCondition({x:0,y:1})' src='"+getImage(seasonFlower[0][1][type], true)+"' value='{\"x\":0,\"y\":1}' name='submit'/></div>\
        <div class='hex_blank hex-row'></div>\
    </div>\
    <div id='2-2' class='hex hex-row'><input type='image' onclick='changeCondition({x:2,y:-2})' src='"+getImage(seasonFlower[2][-2][type], true)+"' value='{\"x\":2,\"y\":-2}' name='submit'/></div>\
    <div id='10' class='hex hex-row'><input type='image' onclick='changeCondition({x:1,y:0})' src='"+getImage(seasonFlower[1][0][type], true)+"' value='{\"x\":1,\"y\":0}' name='submit'/></div>\
    <div id='02' class='hex hex-row'><input type='image' onclick='changeCondition({x:0,y:2})' src='"+getImage(seasonFlower[0][2][type], true)+"' value='{\"x\":0,\"y\":2}' name='submit'/></div>\
    <div class='even'>\
        <div id='2-1' class='hex hex-row'><input type='image' onclick='changeCondition({x:2,y:-1})' src='"+getImage(seasonFlower[2][-1][type], true)+"' value='{\"x\":2,\"y\":-1}' name='submit'/></div>\
        <div id='11' class='hex hex-row'><input type='image' onclick='changeCondition({x:1,y:1})' src='"+getImage(seasonFlower[1][1][type], true)+"' value='{\"x\":1,\"y\":1}' name='submit'/></div>\
        <div class='hex_blank hex-row'></div>\
    </div>\
    <div class='hex_blank hex-row'></div>\
    <div id='20' class='hex hex-row'><input type='image' onclick='changeCondition({x:2,y:0})' src='"+getImage(seasonFlower[2][0][type], true)+"' value='{\"x\":2,\"y\":0}' name='submit'/></div>\
    <div class='hex_blank hex-row'></div>\
    </td></tr><tr align='center'><td><input type='submit' onclick='doneChanging(\""+type+"\")' name='Done' value='Done'/></td></tr></table></form>";

    //outputHTML += JSON.stringify(seasonFlower);
    outputHTML+="<p name='debug'></p>"

    outputHTML += "</body></html>";

    //MapTool.chat.broadcast(outputHTML.replaceAll("<","&lt;"))

    return outputHTML;
}

MTScript.registerMacro("ca.rlw.change_conditions", change_conditions);