var dis = [
	{
		disX : 0,
		disY : 0,
	},
	{
		disX : 0,
		disY : 0,
	},
	{
		disX : 0,
		disY : 0,
	},
	{
		disX : 0,
		disY : 0,
	}
];

var rgbaArr = [132,78,155,1];

var currentPickerIndex = 0;

var rgba1 = $('#rgba1').radialIndicator({
	radius: 36,
	barColor: 'rgba(255,10,10,0.5)',
	barBgColor: "rgba(255,255,2555,0.35)",
	barWidth: 6,
	initValue: 0,
	minValue: 0,
	maxValue: 255,
	roundCorner : true,
	percentage: false,
	displayNumber: false,
	frameTime: 3
});

var rgba2 = $('#rgba2').radialIndicator({
	radius: 36,
	barColor: 'rgba(10,255,10,0.5)',
	barBgColor: "rgba(255,255,2555,0.35)",
	barWidth: 6,
	initValue: 0,
	minValue: 0,
	maxValue: 255,
	roundCorner : true,
	percentage: false,
	displayNumber: false,
	frameTime: 3
});

var rgba3 = $('#rgba3').radialIndicator({
	radius: 36,
	barColor: 'rgba(10,10,255,0.5)',
	barBgColor: "rgba(255,255,2555,0.35)",
	barWidth: 6,
	initValue: 0,
	minValue: 0,
	maxValue: 255,
	roundCorner : true,
	percentage: false,
	displayNumber: false,
	frameTime: 3
});

var rgba4 = $('#rgba4').radialIndicator({
	radius: 36,
	barColor: 'rgba(255,255,255,0.5)',
	barBgColor: "rgba(255,255,2555,0.35)",
	barWidth: 6,
	initValue: 0,
	minValue: 0,
	maxValue: 100,
	roundCorner : true,
	percentage: false,
	displayNumber: false,
	frameTime: 3
});    


var recColor = [
	{
		six: "#DC9FB4",
		tColor: "#7B5965",
		rgba: [220,159,180,1],
		text: "舞子",
		word: "NADESHIKO"
	},
	{
		six: "#E16B8C",
		tColor: "#803D50",
		rgba: [255,107,140,1],
		text: "红梅",
		word: "KOHBAI"
	},
		{
		six: "#8E354A",
		tColor: "#EF597C",
		rgba: [143,53,74,1],
		text: "苏芳",
		word: "SUOH"
	},
	{
		six: "#F8C3CD",
		tColor: "#97777D",
		rgba: [248,195,205,1],
		text: "退红",
		word: "TAIKOH"
	},
		{
		six: "#F4A7B9",
		tColor: "#936570",
		rgba: [244,167,185,1],
		text: "一斥染",
		word: "IKKONZOME"
	},
	{
		six: "#64363C",
		tColor: "#C56A76",
		rgba: [100,54,60,1],
		text: "桑染",
		word: "KUWAZOME"
	},
		{
		six: "#F596AA",
		tColor: "#945B67",
		rgba: [245,150,170,1],
		text: "桃",
		word: "MOMO"
	},
	{
		six: "#B5495B",
		tColor: "#54222A",
		rgba: [181,73,91,1],
		text: "莓",
		word: "ICHIGO"
	},
		{
		six: "#E87A90",
		tColor: "#874754",
		rgba: [232,122,144,1],
		text: "薄红",
		word: "USUBENI"
	},
	{
		six: "#DB4D6D",
		tColor: "#7A2B3D",
		rgba: [219,77,109,1],
		text: "中红",
		word: "NAKABENI"
	}

]