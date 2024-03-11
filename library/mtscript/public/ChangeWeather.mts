
[h:Token = "Lib:ca.rlw"]

[h: currentConditionsCoords = getLibProperty("currentWeather",Token)]
[h: currentSeason = getLibProperty("season", Token)]
[h: seasonMap = getLibProperty("season_map", Token)]
[h: seasonFlower = json.get(json.get(seasonMap, currentSeason), "flower")]
[h: seasonFlower = getLibProperty(seasonFlower, Token)]
[h: imageDict = getLibProperty("image_dict", Token)]

[h, if(json.contains(macro.args,"submit")), code:{
	[h: sendData = json.fromStrProp(json.get(macro.args,"submit"))]
	[h, MACRO("SetWeather@Lib:ca.rlw"): sendData]
};{}]

[h, if(json.contains(macro.args,"Done")), code:{
	[h: vis =  isDialogVisible("Change Weather")]
	[h, if(vis), code:{
		[h: closeDialog("Change Weather")]
	}]
	[h: ca.rlw.updateUI()]
	[h: macro.return=""]
	[h: return(0)]
};{}]

[h: type="weather"]
[dialog5("Change Weather","width=620; height=700; closeButton=0; temporary=1;"):{
	<html>
		<head><link rel='stylesheet' type='text/css' href='lib://ca.rlw/css/hexGrid.css'></head>
		<form action='macro://ChangeWeather@Lib:ca.rlw/self/impersonated?'>
		<table style='width:100%'><tr align='center'><td>
		<div class='hex_blank hex-row'></div>
		<div id='-20' class='hex hex-row'><input type='image' src='[r: js.ca.rlw.getImage(json.get(json.get(json.get(seasonFlower, -2), 0), type), true)]' value='x=-2;y=0' name='submit'/></div>
		<div class='hex_blank hex-row'></div>
		<div class='even'><div id='-1-1' class='hex hex-row'><input type='image' src='[r: js.ca.rlw.getImage(json.get(json.get(json.get(seasonFlower, -1), -1), type), true)]' value='x=-1;y=-1' name='submit'/></div>
        	<div id='-21' class='hex hex-row'><input type='image' src='[r: js.ca.rlw.getImage(json.get(json.get(json.get(seasonFlower, -2), 1), type), true)]' value='x=-2;y=1' name='submit'/></div>
        	<div class='hex_blank hex-row'></div>
    	</div>
		<div id='0-2' class='hex hex-row'><input type='image' src='[r: js.ca.rlw.getImage(json.get(json.get(json.get(seasonFlower, 0), -2), type), true)]' value='x=0;y=-2' name='submit'/></div>
		<div id='-10' class='hex hex-row'><input type='image' src='[r: js.ca.rlw.getImage(json.get(json.get(json.get(seasonFlower, -1), 0), type), true)]' value='x=-1;y=0' name='submit'/></div>
		<div id='-2-2' class='hex hex-row'><input type='image' src='[r: js.ca.rlw.getImage(json.get(json.get(json.get(seasonFlower, -2), 2), type), true)]' value='x=-2;y=2' name='submit'/></div>
		<div class='even'>
			<div id='-0-1' class='hex hex-row'><input type='image' src='[r: js.ca.rlw.getImage(json.get(json.get(json.get(seasonFlower, 0), -1), type), true)]' value='x=0;y=-1' name='submit'/></div>
			<div id='-11' class='hex hex-row'><input type='image' src='[r: js.ca.rlw.getImage(json.get(json.get(json.get(seasonFlower, -1), 1), type), true)]' value='x=-1;y=1' name='submit'/></div>
			<div class='hex_blank hex-row'></div>
		</div>
		<div id='1-2' class='hex hex-row'><input type='image' src='[r: js.ca.rlw.getImage(json.get(json.get(json.get(seasonFlower, 1), -2), type), true)]' value='x=1;y=-2' name='submit'/></div>
		<div id='00' class='hex hex-row'><input type='image' src='[r: js.ca.rlw.getImage(json.get(json.get(json.get(seasonFlower, 0), 0), type), true)]' value='x=0;y=0' name='submit'/></div>
		<div id='-12' class='hex hex-row'><input type='image' src='[r: js.ca.rlw.getImage(json.get(json.get(json.get(seasonFlower, -1), 2), type), true)]' value='x=-1;y=2' name='submit'/></div>
		<div class='even'>
			<div id='1-1' class='hex hex-row'><input type='image' src='[r: js.ca.rlw.getImage(json.get(json.get(json.get(seasonFlower, 1), -1), type), true)]' value='x=1;y=-1' name='submit'/></div>
			<div id='01' class='hex hex-row'><input type='image' src='[r: js.ca.rlw.getImage(json.get(json.get(json.get(seasonFlower, 0), 1), type), true)]' value='x=0;y=1' name='submit'/></div>
			<div class='hex_blank hex-row'></div>
		</div>
		<div id='2-2' class='hex hex-row'><input type='image' src='[r: js.ca.rlw.getImage(json.get(json.get(json.get(seasonFlower, 2), -2), type), true)]' value='x=2;y=-2' name='submit'/></div>
		<div id='10' class='hex hex-row'><input type='image' src='[r: js.ca.rlw.getImage(json.get(json.get(json.get(seasonFlower, 1), 0), type), true)]' value='x=1;y=0' name='submit'/></div>
		<div id='02' class='hex hex-row'><input type='image' src='[r: js.ca.rlw.getImage(json.get(json.get(json.get(seasonFlower, 0), 2), type), true)]' value='x=0;y=2' name='submit'/></div>
		<div class='even'>
			<div id='2-1' class='hex hex-row'><input type='image' src='[r: js.ca.rlw.getImage(json.get(json.get(json.get(seasonFlower, 2), -1), type), true)]' value='x=2;y=-1' name='submit'/></div>
			<div id='11' class='hex hex-row'><input type='image' src='[r: js.ca.rlw.getImage(json.get(json.get(json.get(seasonFlower, 1), 1), type), true)]' value='x=1;y=1' name='submit'/></div>
			<div class='hex_blank hex-row'></div>
		</div>
		<div class='hex_blank hex-row'></div>
		<div id='20' class='hex hex-row'><input type='image' src='[r: js.ca.rlw.getImage(json.get(json.get(json.get(seasonFlower, 2), 0), type), true)]' value='x=2;y=0' name='submit'/></div>
		<div class='hex_blank hex-row'></div>
		</td></tr><tr align='center'><td><input type='submit' onclick='doneChanging([r: type])' name='Done' value='Done'/></td></tr></table></form>
	</html>
}]