[h: vFunctionPrefix = "ca.rlw."]
[h: vJSRegEx = ".*\\.js\$"]
[h: vJSNameSpace = "ca.rlw"]
[h: js.createNS(vJSNameSpace)]
[h: libContents = library.getContents("ca.rlw")]

[h: scripts = "[]"]
[h: imageList = "[]"]
[h, foreach(item, libContents), code:{
	[h: mtscriptMatch = matches(item, "mtscript.*")]
    [h: jsMatch = matches(item, ".*\.js")]
    [h: pngMatch = matches(item, ".*\.png")]
    [h: svgMatch = matches(item, ".*\.svg")]
    [h, if(mtscriptMatch || jsMatch), code:{
    	[h: scripts = json.append(scripts, item)]
    };{}]
    [h, if(pngMatch || svgMatch), code:{
        [h: imageList = json.append(imageList, item)]
    };{}]
}]

[h, foreach(item, scripts), code:{
	[h: id = strfind(item, ".*/(.*)")]
	[h: name = replace(getGroup(id, 1, 1), ".mts", "")]
	[h: path = replace(item, "^public/", "")]
    [if(!matches(item, vJSRegex)):
        defineFunction(vFunctionPrefix + name, name + "@Lib:ca.rlw");
        js.evalURI(vJSNameSpace, "lib://ca.rlw/" + path)]
}]

[h: imageDict = "{}"]
[h, foreach(image, imageList), code:{
    [h: id = strfind(image, "/([^/]*)\$")]
    [h: fileName = getGroup(id, 1, 1)]
    [h: id = strFind(fileName, "[^.]*")]
    [h: imageName = getGroup(id, 1, 0)]
    [h: assetString = "lib://ca.rlw/" + replace(image, "public/", "")]
    [h: imageDict = json.set(imageDict, imageName, assetString)]
}]

[h: setLibProperty("image_dict", imageDict, "Lib:ca.rlw")]

[h: ca.rlw.Setup()]
[h: ca.rlw.Create_GM_Macros()]