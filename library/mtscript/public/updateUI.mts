[h: arguments = json.get(macro.args,0)]

[h: vOverlay = isOverlayRegistered("rlWeatherOverlay")]
[h: execLink(macroLinkText("loadOverlay@" + getMacroLocation(), "none", ""), 0, "all")]
[h, if(vOverlay): ca.rlw.loadOverlay()]