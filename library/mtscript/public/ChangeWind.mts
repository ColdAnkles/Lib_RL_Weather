
[h:Token = "Lib:ca.rlw")]

[h, if(json.contains(macro.args,"submit")), code:{
	[h: sendData = json.get(macro.args,"submit")]
	[h, MACRO("SetWind@Lib:ca.rlw"): sendData]
};{}]

[h, if(json.contains(macro.args,"Done")), code:{
	[h: vis =  isDialogVisible("Change Wind")]
	[h, if(vis), code:{
		[h: closeDialog("Change Wind")]
	}]
	[h: ca.rlw.updateUI()]
	[h: return(0)]
};{
	[dialog5("Change Wind","width=620; height=700; closeButton=0; temporary=0;"):{
		[r: js.ca.rlw.change_conditions("wind")]
	}]
}]
