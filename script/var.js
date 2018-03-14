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

var rgbaArr = [0,0,0,0];

var currentPickerIndex = 0;

var rgba1 = $('#rgba1').radialIndicator({
	radius: 36,
	barColor: '#87CEEB',
	barWidth: 5,
	initValue: 60,
	minValue: 0,
	maxValue: 255,
	roundCorner : true,
	percentage: false,
	displayNumber: false
});

var rgba2 = $('#rgba2').radialIndicator({
	radius: 36,
	barColor: '#87CEEB',
	barWidth: 5,
	initValue: 60,
	minValue: 0,
	maxValue: 255,
	roundCorner : true,
	percentage: false,
	displayNumber: false
});

var rgba3 = $('#rgba3').radialIndicator({
	radius: 36,
	barColor: '#87CEEB',
	barWidth: 5,
	initValue: 60,
	minValue: 0,
	maxValue: 255,
	roundCorner : true,
	percentage: false,
	displayNumber: false
});

var rgba4 = $('#rgba4').radialIndicator({
	radius: 36,
	barColor: '#87CEEB',
	barWidth: 5,
	initValue: 10,
	minValue: 0,
	maxValue: 100,
	roundCorner : true,
	percentage: false,
	displayNumber: false
});    