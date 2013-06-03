# 基本的页码导航

---

<link rel="stylesheet" href="http://style.aliunicorn.com/css/6v/apollo/core/core-ws.css?t=0_0" />
<link rel="stylesheet" href="http://style.aliunicorn.com/css/6v/apollo/mod/pagination/pagination-ws.css?t=0_0" />
<style>
.ui-pagination{font-size:12px;}
</style>

## JavaScript 初始化组件

````html
<div id="normal-pagination" class="ui-pagination ui-pagination-body util-clearfix">
	<div class="ui-pagination-navi util-left">
		<span href="#" class="ui-pagination-prev ui-pagination-disabled" data-role="prev">previous</span>
		<span class="ui-pagination-active">1</span>
		<a href="http://www.aliexpress.com/wholesale?SearchText=mp3&CatId=0&manual=y&page=2">2</a>
		<a href="http://www.aliexpress.com/wholesale?SearchText=mp3&CatId=0&manual=y&page=3">3</a>
		<a href="http://www.aliexpress.com/wholesale?SearchText=mp3&CatId=0&manual=y&page=4">4</a>
		<span>...</span>
		<a href="http://www.aliexpress.com/wholesale?SearchText=mp3&CatId=0&manual=y&page=99">99</a>
		<a href="http://www.aliexpress.com/wholesale?SearchText=mp3&CatId=0&manual=y&page=100">100</a>
		<a class="ui-pagination-next" href="http://www.aliexpress.com/wholesale?SearchText=mp3&CatId=0&manual=y&page=2" data-role="next">next</a>
	</div>
	<div class="ui-pagination-goto util-right">
		<label class="ui-label">
			Go to Page
			<input type="text" maxlength="3" class="ui-textfield ui-textfield-system" size="3" data-role="input" />
		</label>
		<button class="ui-button ui-button-normal ui-button-small" data-role="submit">Go</button>
	</div>
</div>
````

````js
seajs.use(['js/6v/lib/icbu/pagination/pagination'], function(Pagination) {
	// 初始化页码导航
	var pagination = new Pagination({
		element: '#normal-pagination',
		total: 100,
		urlRole: 'http://www.aliexpress.com/wholesale?SearchText=mp3&CatId=0&manual=y&page=%page%',
		pageEscape: '%page%'
	}).render();

	// 自定义翻页事件
	pagination.on('turn', function(to, _self, ev) {
		if(ev) {
			ev.preventDefault();
		}
		var from = _self.get('current');
		var url = this.get('urlRole').replace(this.get('pageEscape'), to);
		alert('从第 ' + from + ' 页转跳到第 ' + to + ' 页，新页面 URL 如下：' + "\n" + url);
	});
});
````

## Widget 加载组件

````html
<div class="ui-pagination ui-pagination-body util-clearfix" data-widget="js/6v/lib/icbu/pagination/pagination" data-total="100" data-url-rule="http://www.aliexpress.com/wholesale?SearchText=mp3&CatId=0&manual=y&page=%page%">
	<div class="ui-pagination-navi util-left">
		<span href="#" class="ui-pagination-prev ui-pagination-disabled" data-role="prev">previous</span>
		<span class="ui-pagination-active">1</span>
		<a href="http://www.aliexpress.com/wholesale?SearchText=mp3&CatId=0&manual=y&page=2">2</a>
		<a href="http://www.aliexpress.com/wholesale?SearchText=mp3&CatId=0&manual=y&page=3">3</a>
		<a href="http://www.aliexpress.com/wholesale?SearchText=mp3&CatId=0&manual=y&page=4">4</a>
		<span>...</span>
		<a href="http://www.aliexpress.com/wholesale?SearchText=mp3&CatId=0&manual=y&page=99">99</a>
		<a href="http://www.aliexpress.com/wholesale?SearchText=mp3&CatId=0&manual=y&page=100">100</a>
		<a class="ui-pagination-next" href="http://www.aliexpress.com/wholesale?SearchText=mp3&CatId=0&manual=y&page=2" data-role="next">next</a>
	</div>
	<div class="ui-pagination-goto util-right">
		<label class="ui-label">
			Go to Page
			<input type="text" maxlength="3" class="ui-textfield ui-textfield-system" size="3" data-role="input" />
		</label>
		<button class="ui-button ui-button-normal ui-button-small" data-role="submit">Go</button>
	</div>
</div>
````


````js
seajs.use(['js/6v/lib/arale/widget/widget.js'], function(Widget){
    Widget.autoRenderAll();
});
````
