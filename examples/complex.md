# 自生成dom的页码导航

- order:2

---

<link rel="stylesheet" href="http://style.aliunicorn.com/css/6v/apollo/core/core-ws.css?t=0_0" />
<link rel="stylesheet" href="http://style.aliunicorn.com/css/6v/apollo/mod/pagination/pagination-ws.css?t=0_0" />
<style>
.ui-pagination{font-size:12px;}
</style>

## JavaScript 初始化组件

````html
<div id="container-1"></div>
````

````js
seajs.use(['js/6v/lib/icbu/pagination/pagination-complex'], function(PaginationComplex) {
	// 初始化页码导航
	var pagination = new PaginationComplex({
		parentNode: '#container-1',
		total: 100,
		current: 3,
		urlRole: 'http://www.aliexpress.com/wholesale?SearchText=mp3&CatId=0&manual=y&page=%page%',
		pageEscape: '%page%'
	}).render();

	// 自定义翻页事件
	pagination.on('turn', function(to, _self, ev) {
		if(ev) {
			ev.preventDefault();
		}
		var from = this.get('current');
		var url = this.get('urlRole').replace(this.get('pageEscape'), to);
		alert('从第 ' + from + ' 页转跳到第 ' + to + ' 页，新页面 URL 如下：' + "\n" + url);
	});
});
````

## 点击后自动改变UI

````html
	<div id="container-2"></div>
````


````js
seajs.use(['js/6v/lib/icbu/pagination/pagination-complex'], function(PaginationComplex) {
	// 初始化页码导航
	var pagination = new PaginationComplex({
		parentNode: '#container-2',
		total: 40
	}).render();

	// 翻页时，直接去设置UI
	pagination.on('turn', function(to, _self, ev) {
		if(ev) {
			ev.preventDefault();
		}
		this.set('current', to);
	});
});
````

## 简化版UI的 widget

````html
	<div id="container-3"></div>
````


````js
seajs.use(['js/6v/lib/icbu/pagination/pagination-complex'], function(PaginationComplex) {
	// 初始化页码导航
	var pagination = new PaginationComplex({
		parentNode: '#container-3',
		total: 100,
		type: 'simplified'
	}).render();

	// 翻页时，直接去设置UI
	pagination.on('turn', function(to, _self, ev) {
		if(ev) {
			ev.preventDefault();
		}
		this.set('current', to);
	});
});
````
