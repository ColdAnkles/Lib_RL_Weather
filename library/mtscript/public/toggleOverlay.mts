[h: overlayDisabled = getLibProperty("overlayDisabled","Lib:ca.rlw")]
[h, if(overlayDisabled==""), code:{
	[h: setLibProperty("overlayDisabled",true,"Lib:ca.rlw")]
};{}]
[h: setLibProperty("overlayDisabled",!overlayDisabled,"Lib:ca.rlw")]
[h: ca.rlw.updateUI()]