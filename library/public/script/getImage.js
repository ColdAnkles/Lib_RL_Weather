"use strict";

function getImage(imageName, srcLocOnly = false) {
	//MapTool.chat.broadcast(imageName);

	imageName = imageName.replaceAll(" ", "_");
	let imageDict = JSON.parse(read_data("image_dict"));
	//MapTool.chat.broadcast(JSON.stringify(imageDict));
	let imageSizeH = 180;
	let imageSizeW = 180;
	let assetString = imageDict[imageName];
	let returnText = "<img src='" + assetString + "' width='" + String(imageSizeW) + "' height='" + String(imageSizeH) + "'></img>";
	//MapTool.chat.broadcast(assetString);
	if (srcLocOnly) {
		returnText = assetString;
	}
	//MapTool.chat.broadcast(returnText);
	return returnText;
}


MTScript.registerMacro("ca.rlw.getImage", getImage);