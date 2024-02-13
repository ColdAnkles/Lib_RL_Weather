[h: old_x=json.get(macro.args,"oldX")]
[h: old_y=json.get(macro.args,"oldY")]
[h: new_x=json.get(macro.args,"newX")]
[h: new_y=json.get(macro.args,"newY")]

[h: '<!-- SOME TERRIBLE WRAPPING OF COORDINATES -->']

[h, if(old_x==-2 && old_y==0), code:{
	[h, if(new_x==-3 && new_y==0),code:{
		[h: new_x=-2]
	};{}]
	[h, if(new_x==-3 && new_y==1),code:{
		[h: new_x=-2]
		[h: new_y=0]
	};{}]
	[h, if(new_x==-2 && new_y==-1),code:{
		[h: new_x=-2]
		[h: new_y=0]
	};{}]
};{}]
[h, if(old_x==-2 && old_y==1), code:{
	[h, if(new_x==-3 && new_y==1),code:{
		[h: new_x=1]
		[h: new_y=1]
	};{}]
	[h, if(new_x==-3 && new_y==2),code:{
		[h: new_x=1]
		[h: new_y=-2]
	};{}]
};{}]
[h, if(old_x==-2 && old_y==2), code:{
	[h, if(new_x==-3 && new_y==2),code:{
		[h: new_x=0]
	};{}]
	[h, if(new_x==-3 && new_y==3),code:{
		[h: new_x=2]
		[h: new_y=-2]
	};{}]
	[h, if(new_x==-2 && new_y==3),code:{
		[h: new_x=-2]
		[h: new_y=2]
	};{}]
};{}]
[h, if(old_x==-1 && old_y==2), code:{
	[h, if(new_x==-2 && new_y==3),code:{
		[h: new_x=2]
		[h: new_y=-1]
	};{}]
	[h, if(new_x==-1 && new_y==3),code:{
		[h: new_x=-1]
		[h: new_y=-1]
	};{}]
};{}]
[h, if(old_x==0 && old_y==2), code:{
	[h, if(new_x==-1 && new_y==3),code:{
		[h: new_x=2]
		[h: new_y=0]
	};{}]
	[h, if(new_x==0 && new_y==3),code:{
		[h: new_x=0]
		[h: new_y=-2]
	};{}]
	[h, if(new_x==1 && new_y==2),code:{
		[h: new_x=-2]
		[h: new_y=2]
	};{}]
};{}]
[h, if(old_x==1 && old_y==1), code:{
	[h, if(new_x==1 && new_y==2),code:{
		[h: new_x=1]
		[h: new_y=-2]
	};{}]
	[h, if(new_x==2 && new_y==1),code:{
		[h: new_x=-2]
		[h: new_y=1]
	};{}]
};{}]
[h, if(old_x==2 && old_y==0), code:{
	[h, if(new_x==2 && new_y==1),code:{
		[h: new_x=2]
		[h: new_y=-2]
	};{}]
	[h, if(new_x==3 && new_y==0),code:{
		[h: new_x=2]
		[h: new_y=0]
	};{}]
	[h, if(new_x==3 && new_y==-1),code:{
		[h: new_x=0]
		[h: new_y=2]
	};{}]
};{}]
[h, if(old_x==2 && old_y==-1), code:{
	[h, if(new_x==3 && new_y==-1),code:{
		[h: new_x=-1]
		[h: new_y=-1]
	};{}]
	[h, if(new_x==3 && new_y==-2),code:{
		[h: new_x=-1]
		[h: new_y=2]
	};{}]
};{}]
[h, if(old_x==2 && old_y==-2), code:{
	[h, if(new_x==3 && new_y==-2),code:{
		[h: new_x=0]
		[h: new_y=-2]
	};{}]
	[h, if(new_x==3 && new_y==-3),code:{
		[h: new_x=-2]
		[h: new_y=2]
	};{}]
	[h, if(new_x==2 && new_y==-3),code:{
		[h: new_x=2]
		[h: new_y=0]
	};{}]
};{}]
[h, if(old_x==1 && old_y==-2), code:{
	[h, if(new_x==2 && new_y==-3),code:{
		[h: new_x=-2]
		[h: new_y=1]
	};{}]
	[h, if(new_x==1 && new_y==-3),code:{
		[h: new_x=1]
		[h: new_y=1]
	};{}]
};{}]
[h, if(old_x==0 && old_y==-2), code:{
	[h, if(new_x==1 && new_y==-3),code:{
		[h: new_x=0]
		[h: new_y=-2]
	};{}]
	[h, if(new_x==0 && new_y==-3),code:{
		[h: new_x=0]
		[h: new_y=2]
	};{}]
	[h, if(new_x==-1 && new_y==-2),code:{
		[h: new_x=2]
		[h: new_y=-2]
	};{}]
};{}]
[h, if(old_x==-1 && old_y==-1), code:{
	[h, if(new_x==-1 && new_y==-2),code:{
		[h: new_x=-1]
		[h: new_y=2]
	};{}]
	[h, if(new_x=-2 && new_y==-1),code:{
		[h: new_x=2]
		[h: new_y=-1]
	};{}]
};{}]

[h: macro.return = json.set("{}","newX",new_x,"newY",new_y)]
