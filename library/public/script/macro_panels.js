"use strict";

function createGMMacros() {
    let GMMacros = [{ "label": "Change Season", "playerEditable": 0, "command": "[h: ca.rlw.SetSeason()]", "tooltip": "Change the current Season" },
    { "label": "Change Weather", "playerEditable": 0, "command": "[h: ca.rlw.ChangeWeather()]", "tooltip": "Change the current Weather" },
    { "label": "Change Wind", "playerEditable": 0, "command": "[h: ca.rlw.ChangeWind()]", "tooltip": "Change the current Wind" },
    { "label": "New Day", "playerEditable": 0, "command": "[h: ca.rlw.WeatherMove()][h: ca.rlw.WindMove()]", "tooltip": "New Day of Weather" },
    { "label": "Toggle Weather Overlay", "playerEditable": 0, "command": "[h: ca.rlw.toggleOverlay()]", "tooltip": "Turn Overlay On/Off" }];
    for (var m in GMMacros) {
        createMacro(GMMacros[m], "gm");
    }

    if(addonExists("Lib:DateTime")){
        createMacro({"label":"Toggle Auto Weather","playerEditable":0,"command":"[h: ca.rlw.ToggleAutoWeather()]","tooltip":"Enable/Disable Auto Weather"}, "gm");
    }

}

MTScript.registerMacro("ca.rlw.createGMMacros", createGMMacros);