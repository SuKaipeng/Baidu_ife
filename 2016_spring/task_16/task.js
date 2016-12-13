/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
  var city = document.getElementById("aqi-city-input").value;
  var aqi = document.getElementById("aqi-value-input").value;
  aqiData[city] = aqi; //访问对象属性有两种方法：点表示法和方括号表示法。
                       //方括号表示法的优点：可以通过变量来访问属性。
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
  var table = document.getElementById("aqi-table");

  var context = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
  for(var city in aqiData){
    context += "<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button>删除</button></td></tr>";
  }
  table.innerHTML = context;
}
/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.

  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();
