/**
 * @desc  获取用户使用网络数据
 * @param  index_type
 * @param  chatId
 */
function getNetWorkData(index_type, chatId, start, end) {// 传递三个参数，index_type为数据类型，chatId为echarts容器Id,start为所取数据开始时间，end为结束时间
	
	var app_id = get_app_id();//从cookie获取当前应用id串，该id在ue文件中
	
	var qdate = $("#date-written").text();//从月份选择控件中取当前选择月份
	
	var date_str = "";//定义一个空字符串变量
	
	qdate = qdate.replace("年", "/");//对月份进行处理，替换汉字"年"为"/"
	
	qdate = qdate.replace("月", "/01");//对月份进行处理，替换汉字"月"为"/01"
	
	date_str = qdate.trim(); //查询时间  //去除月份字符串头尾空格
	
	if(date_str != null && date_str != undefined) {
		//只有当月份参数不为空才发起ajax请求
		$.post(
			"/jppt/jp-index-data/comments",//请求地址
			
			{//请求参数，对象表示
				appid: app_id,
				indexType: index_type,
				startDate: start,
				endDate: end
			},
			
			function(result, status) {//接收返回的json格式字符串及状态码
				
				if(checkResult(result)) {//检测数据返回是否正常
					
					result = JSON.parse(result);//对返回的字符串解析为json对象并赋值
					
					console.log(result);
					
					//定义x坐标显示名数组，series为图形值数组，appstore为临时数组，legendData为图标title数组
					var xAxisData = [],
						series = [],
						appstore = [],
						legendData = [],
						
						data = result['data'],
						comment;
					//取所需使用的对象赋值，定义一个临时变量
					$.each(data, function(app, obj) {//遍历data对象，app为键值即app名，obj为每个app的值，一个存储有关于该app信息的对象
						
						xAxisData.push(app);//将app名推入x坐标数组，用于组装option
						
						$.each(obj, function(i, a) {//对obj对象进行二次遍历
							
							var t = a['indexValue'].split("|");
							//indexValue:"3G:0.2686155493365|4G:0.68090354160497|WIFI:0.72134356910983" 对此格式的字符串进行分割处理，成为t数组
							$.each(t, function(j, s) {//对t数组进行遍历，j为索引值，s为键值
								
								comment = s.split(":");//对分割后的数组如["3G:0.2686155493365"]进行二次分割成["3G",""0.2686155493365]
								
								if(!appstore[j]) {//检测临时数组是否有属性j，即第j个存不存在，不存在则定义一个空数组,此处使用hasOwnProperty也是可以的，用以检测键名是否存在，以下同
									
									appstore[j] = [];
								}
								if(!legendData[j]) {//如果图标数组含有j属性，将切割后的comment键名赋值给它，比如4G，此数组将用来在option中进行循环，因为series单元的数量由其决定
									
									legendData[j] = comment[0];
								}
								var temp = (comment[1] * 100).toFixed(2);//截取长字符串为小数点后2位
								
								appstore[j].push(temp);//将截取后的字符串推入动态数组
								
							});
						});

					});
					//循环option中的series，循环图标名及data值
					$.each(legendData, function(i, n) {
						seriesItem = {
							name: n,
							type: 'bar',
							barGap: "15%",
							barWidth: 90,
							label: {
								formatter: "{a} :{c} %",
								position: "insideRight",
								show: true
							},
							itemStyle: {
								normal: {
									label: {
										formatter: "{a} : {c} %",
										position: "insideRight",
										show: true
									}
								}
							},
							data: appstore[i]
						};
						series.push(seriesItem);//循环一次，将组装好的单元推入series数组
						
					});

					var dom = document.getElementById(chatId);
					var myChart = echarts.init(dom);
					var option = setNetWordOption(legendData, xAxisData, series);
					if(option && typeof option === "object") {
						myChart.setOption(option, true);
					}
				} else {
					console.log("数据异常");
				}
				if(status == "success") {
					$("#umask").removeClass("mask");
				}
			});
	}

}