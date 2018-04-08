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

