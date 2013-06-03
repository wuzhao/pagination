# Pagination

----

加工处理页码导航区块事件，对页码点击和表单翻页事件进行处理。运行于 [AraleJS](https://github.com/aralejs) 框架。

[API 文档](http://arale.alizoo.com/pagination/) | [Demo 示例](http://arale.alizoo.com/pagination/examples/)

----


## 配置说明

### element `element`

页码导航区块的节点的 jQuery 对象。

### current `number`

当前页码。

### total `number`

总页数。

### urlRule `string`

页面链接规则。

### pageEscape `string`

页码转义符号，默认是 `%page%`。


## 事件说明

### turn

翻页处理，当用户点击数字翻页或者输入数字点击 `[Go]` 翻页时触发。有回调参数如下：

* page `number` 目标转跳页码。
* pagination `object` 当前 Pagination 对象。
* ev `object` 点击事件，如果有的话。


## 方法说明

### page(page) 

翻到某页。page `number` 目标转跳页码。

### first()

翻到第一页。

### last()

翻到最后一页。

### prev()

翻到上一页。

### next()

翻到下一页。


## 最佳实践

1. JavaScript 初始化组件

	```html
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
	```

	```js
	seajs.use(['pagination'], function(Pagination) {
		// 初始化页码导航
		var pagination = new Pagination({
			element: '#pagination',
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
	```

2. Widget 加载组件
	
	```html
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
	```