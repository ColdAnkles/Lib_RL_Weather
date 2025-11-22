"use strict";

function addonExists(addonName) {
    MTScript.setVariable("addonName", addonName);
    MTScript.evalMacro("[h: exists = ca.rlw.isLibraryLoaded(addonName)]")
    return Boolean(String(MTScript.getVariable("exists")) == "1");
}