"use strict";

function write_data(data_key, data_content) {
    MTScript.setVariable("varName", data_key);
    MTScript.setVariable("varValue", data_content);
    MTScript.evalMacro("[h: setLibProperty(varName, varValue, 'Lib:ca.rlw')]")
}

function read_data(data_key) {
    MTScript.setVariable("varName", data_key);
    MTScript.evalMacro("[h: returnedData = getLibProperty(varName, 'Lib:ca.rlw')]");
    return MTScript.getVariable("returnedData");
}