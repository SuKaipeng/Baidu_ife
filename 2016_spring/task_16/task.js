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
  var city = document.getElementById("aqi-city-input").value.trim(); //trim()去除字符串前后的空格。
  var aqi = document.getElementById("aqi-value-input").value.trim();

  if(/[\u4e00-\u9fa5]+/i.test(city) || /[a-zA-Z]+/i.test(city)){ //[\u4e00-\u9fa5]中文字符的范围。
    if(/^[[1-9]+[0-9]*]*$/.test(aqi)){
      aqiData[city] = aqi; //访问对象属性有两种方法：点表示法和方括号表示法。
                           //方括号表示法的优点：可以通过变量来访问属性。
    } else {
      alert("请在“空气质量指数”输入正整数！");
    }
  } else {
    alert("请在“城市名称”输入中英文字符！");
  }

}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
  var table = document.getElementById("aqi-table");

  var context = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
  for(var city in aqiData){
    context += "<tr><td>" + city + "</td><td>" + aqiData[city] + "</td><td><button>删除</button></td></tr>";
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

  var city = event.target.parentNode.previousElementSibling.previousElementSibling.firstChild.nodeValue;

  delete aqiData[city]

  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  
  var button = document.getElementById("add-btn");
  button.addEventListener("click", addBtnHandle, false);

  var table = document.getElementById("aqi-table");
  table.addEventListener("click", function(){
    if(event.target.tagName === "BUTTON"){
      delBtnHandle();
    }
  }, false);
    
}

init();

/* 1.在html中，<script>被放在<head>中。<script>比<button>加载得早，
 *   导致click事件绑定不成功。
 *
 * 2.页面加载完成后，再向DOM中新添加的元素，应使用事件委托进行事件绑定。
 */
