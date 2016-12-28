// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = ''
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: "北京",
  nowGraTime: "day"
}

/**
 * 渲染图表
 */
function renderChart() {
	chartData = aqiSourceData[pageState.nowSelectCity]; //需要删除，初始化数据
	var date = [], sourceDate, width, left, i, histogram="",
	    wrap = document.getElementsByClassName("aqi-chart-wrap")[0];
	//时间排序
	for (sourceDate in chartData){
		date.push(sourceDate);
	};
	date.sort(function(a, b){
		return Date.parse(a) - Date.parse(b);
	});
	//确定width和left
	switch (pageState.nowGraTime){
		case "day":
			width = 9, left = 10;
			break;
		case "week":
			width = 60, left = 70;
			break;
		case "month":
			width = 250, left = 300;
			break;
	}
	for (i = 0; i < date.length; i++){
		histogram += '<div class="histogram" title="' + date[i] + ': ' + chartData[date[i]] + '" style="width:'
		             + width +'px; left:' + left * i + 'px; height:' + chartData[date[i]]
		             + 'px; background-color: black;"></div>'    //background-color随机未写
	}
	wrap.innerHTML = histogram;
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
  // 确定是否选项发生了变化 
	var radios = document.getElementById("form-gra-time").elements, i;
	for (i = 0; i < radios.length; i++){
  // 设置对应数据
  		if (radios[i].checked = true){
  			pageState.nowGraTime = radios[i].value;
  			break;
  		}
  	}
  // 调用图表渲染函数
  renderChart();
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
  // 确定是否选项发生了变化 
	var options = document.getElementById("city-select").options, i;
	for (i = 0; i < options.length; i++){
  // 设置对应数据
  		if (options[i].selected = true){
  			pageState.nowSelectCity = options[i].value;
  			break;
  		}
  	}
  // 调用图表渲染函数
	renderChart();
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
	var timeFieldset = document.getElementById("form-gra-time"); //不确定是否正确
	timeFieldset.addEventListener("click", function(){
		graTimeChange();
	}, false);
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项

  // 给select设置事件，当选项发生变化时调用函数citySelectChange

}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
  // 将原始的源数据处理成图表需要的数据格式
  // 处理好的数据存到 chartData 中
	switch (pageState.nowGraTime){
		case "day":
			chartData.day = aqiSourceData[pageState.nowSelectCity];
		case "week":
			
  //写完这个函数后，调整renderChart()
	}
}

/**
 * 初始化函数
 */
function init() {
  initGraTimeForm()
  initCitySelector();
  initAqiChartData();
}

init();