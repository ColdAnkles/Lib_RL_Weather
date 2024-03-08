[h: setLibProperty("currentWeather","{'x': 0,'y': 0}","Lib:ca.rlw")]
[h: setLibProperty("currentWind","{'x': 0,'y': 0}","Lib:ca.rlw")]
[h: setLibProperty("flower_a","{'-1':{'-1':{'weather':'Hot Sunny Day','wind':'No Wind'},'0':{'weather':'Cloudy','wind':'Windy'},'1':{'weather':'Heavy Clouds','wind':'Winds'},'2':{'weather':'Rain','wind':'Winds'}},'-2':{'0':{'weather':'Wild Weather','wind':'Wild Winds'},'1':{'weather':'Thunderstorm','wind':'Strong Wind'},'2':{'weather':'Heavy Rain','wind':'Strong Wind'}},'0':{'-1':{'weather':'Clear Sky','wind':'Winds'},'-2':{'weather':'Clear Sky','wind':'No Wind'},'0':{'weather':'Drizzle','wind':'Breezes'},'1':{'weather':'Light Showers','wind':'Winds'},'2':{'weather':'Light Showers','wind':'Winds'}},'1':{'-1':{'weather':'Light Clouds','wind':'Winds'},'-2':{'weather':'Clear Sky','wind':'Breezes'},'0':{'weather':'Cloudy','wind':'Breezes'},'1':{'weather':'Overcast','wind':'Breezes'}},'2':{'-1':{'weather':'Light Clouds','wind':'Breezes'},'-2':{'weather':'Drizzle','wind':'Winds'},'0':{'weather':'Cloudy','wind':'No Wind'}}}","Lib:ca.rlw")]
[h: setLibProperty("flower_b","{'-1':{'-1':{'weather':'Clear Sky','wind':'Strong Wind'},'0':{'weather':'Heavy Clouds','wind':'Winds'},'1':{'weather':'Snow Flurry','wind':'Winds'},'2':{'weather':'Heavy Rain','wind':'Winds'}},'-2':{'0':{'weather':'Wild Weather','wind':'Wild Wind'},'1':{'weather':'Snow','wind':'Strong Wind'},'2':{'weather':'Snow Flurry','wind':'Strong Wind'}},'0':{'-1':{'weather':'Light Clouds','wind':'Winds'},'-2':{'weather':'Clear Sky','wind':'No Wind'},'0':{'weather':'Cloudy','wind':'Breezes'},'1':{'weather':'Light Showers','wind':'Winds'},'2':{'weather':'Light Showers','wind':'Winds'}},'1':{'-1':{'weather':'Overcast','wind':'Winds'},'-2':{'weather':'Cloudy','wind':'Breezes'},'0':{'weather':'Light Clouds','wind':'Breezes'},'1':{'weather':'Overcast','wind':'Breezes'}},'2':{'-1':{'weather':'Drizzle','wind':'Breezes'},'-2':{'weather':'Drizzle','wind':'Winds'},'0':{'weather':'Cloudy','wind':'No Wind'}}}","Lib:ca.rlw")]
[h: setLibProperty("flower_c","{'-1':{'-1':{'weather':'Clear Sky','wind':'Strong Wind'},'0':{'weather':'Heavy Clouds','wind':'Strong Wind'},'1':{'weather':'Overcast','wind':'Winds'},'2':{'weather':'Snow Flurry','wind':'Strong Wind'}},'-2':{'0':{'weather':'Wild Weather','wind':'Wild Wind'},'1':{'weather':'Heavy Snow','wind':'Strong Wind'},'2':{'weather':'Snow','wind':'Winds'}},'0':{'-1':{'weather':'Clear Sky','wind':'Winds'},'-2':{'weather':'Clear Sky','wind':'No Wind'},'0':{'weather':'Cloudy','wind':'Breezes'},'1':{'weather':'Snow Flurry','wind':'Breezes'},'2':{'weather':'Snow Flurry','wind':'Winds'}},'1':{'-1':{'weather':'Light Clouds','wind':'Winds'},'-2':{'weather':'Clear Sky','wind':'Breezes'},'0':{'weather':'Cloudy','wind':'Breezes'},'1':{'weather':'Overcast','wind':'Winds'}},'2':{'-1':{'weather':'Light Clouds','wind':'Breezes'},'-2':{'weather':'Sunny Snow','wind':'Winds'},'0':{'weather':'Cloudy','wind':'No Wind'}}}","Lib:ca.rlw")]
[h: setLibProperty("season","Early Spring","Lib:ca.rlw")]
[h: setLibProperty("season_map","{'Early Autumn':{'flower':'flower_a','move':'move_map_c'},'Late Autumn':{'flower':'flower_b','move':'move_map_d'},'Early Spring':{'flower':'flower_b','move':'move_map_b'},'Late Spring':{'flower':'flower_a','move':'move_map_a'},'Early Summer':{'flower':'flower_a','move':'move_map_b'},'Late Summer':{'flower':'flower_a','move':'move_map_b'},'Early Winter':{'flower':'flower_c','move':'move_map_b'},'Late Winter':{'flower':'flower_c','move':'move_map_b'}}","Lib:ca.rlw")]
[h: setLibProperty("move_map_a","[{'x':0,'y':0},{'x':0,'y':0},{'x':-1,'y':1},{'x':0,'y':1},{'x':1,'y':0},{'x':1,'y':-1},{'x':0,'y':-1},{'x':-1,'y':1},{'x':0,'y':1},{'x':1,'y':0},{'x':1,'y':-1},{'x':0,'y':-1},{'x':-1,'y':0}]","Lib:ca.rlw")]
[h: setLibProperty("move_map_b","[{'x':0,'y':0},{'x':0,'y':0},{'x':-1,'y':1},{'x':-1,'y':1},{'x':0,'y':1},{'x':0,'y':1},{'x':1,'y':0},{'x':1,'y':0},{'x':1,'y':-1},{'x':1,'y':-1},{'x':0,'y':-1},{'x':0,'y':-1},{'x':-1,'y':0}]","Lib:ca.rlw")]
[h: setLibProperty("move_map_c","[{'x':0,'y':0},{'x':0,'y':0},{'x':-1,'y':0},{'x':0,'y':-1},{'x':0,'y':-1},{'x':-1,'y':1},{'x':-1,'y':1},{'x':0,'y':1},{'x':0,'y':1},{'x':1,'y':-1},{'x':1,'y':-1},{'x':1,'y':0},{'x':-1,'y':0}]","Lib:ca.rlw")]
[h: setLibProperty("move_map_d","[{'x':0,'y':0},{'x':0,'y':-1},{'x':0,'y':-1},{'x':1,'y':-1},{'x':1,'y':-1},{'x':1,'y':0},{'x':1,'y':0},{'x':0,'y':1},{'x':0,'y':1},{'x':-1,'y':1},{'x':-1,'y':1},{'x':-1,'y':0}]","Lib:ca.rlw")]

[h: ca.rlw.updateUI()]