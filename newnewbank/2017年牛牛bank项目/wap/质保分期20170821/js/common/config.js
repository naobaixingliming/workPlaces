/**
 * require配置文件
 */

require.config({
	baseUrl: 'http://192.168.20.8:8020/2017年牛牛bank项目/wap/质保分期20170821/js', // 加载js文件时以此路径作为参照 baseUrl + paths = 文件的完整路径
	waitSeconds: 10, // 设置超时
	urlArgs: 'v=' + Date.now(), // 不同的版本用不同的标识,达到清理缓存的目的
	// 配置短路径  baseUrl + 短路径 === 完整路径
	path: {
		'jquery': '/libs/jquery-1.10.2.min.js',
		'jquery-ui': '/libs/jquery-ui.min.js',
		'mui': '/plugins/mui.min.js',
		'mui-picker': '/plugins/mui.picker.js',
		'mui-poppicker': '/plugins/mui.poppicker.js',
		'fastclick': '/plugins/fastclick.min.js',
		'circle-progress': '/plugins/circle-progress.min.js',
		'bank-data':'/plugins/bank.data.js',
		"common": "common/common",
	},
	// 定义非amd模块和依赖
	shim: {
		// 加载非AMD规范js文件
		'jquery': {
			exports: '$'
		},
		'mui': {
			exports: 'mui'
		},
		// 声明依赖关系
		'jquery-ui': {
			deps: ['jquery']
		},
		'circle-progress': {
			deps: ['jquery']
		}
	}
});
console.log("config finish!");