# PaginationComplex

order: 3

----

有html自生成的 pagination 组件升级版本

----


## 配置说明

### parentNode `element`

页码导航区块的容器的 jQuery 对象。

### template `string`

生成dom结构的模板，大部分情况下使用默认的dpl即可， __不建议自己定制！！__

### current `number`

当前页码。

### total `number`

总页数。

### urlRule `string`

页面链接规则。

### pageEscape `string`

页码转义符号，默认是 `%page%`。

### type `string` 

页码导航形态，可输入 `normal`|`simplified`，默认为 `normal`。


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

1. 最简单的使用方式，使用普通UI

	```html
	<div id="container-1"></div>
	```

	```js
	seajs.use(['pagination-complex'], function(PaginationComplex) {
		// 初始化页码导航
		var pagination = new PaginationComplex({
			parentNode: '#container-1',
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

2. 简化版UI的 widget
	
	```html
	<div id="container-2"></div>
	```
	
	```js
	seajs.use(['pagination-complex'], function(PaginationComplex) {
		// 初始化页码导航
		var pagination = new PaginationComplex({
			parentNode: '#container-2',
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
	```