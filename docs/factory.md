# PaginationCreator 页码导航构造工厂

----

这是一个单例，提供 JavaScript 构造页码导航区块的工厂方法。

----

## 方法说明

### factory(options)

构造页码导航区域，并为止添加相关事件处理，返回 jQuery 对象。`options` 结构如下：

* current `number` 当前页码，整数，默认为 1。
* total `number` 总页数，整数，默认为 1。
* type `string` 页码导航形态，可输入 `normal`|`simplified`，默认为 `normal`。
* onTurn(page, pagination, ev) `function` 翻页处理，与 Pagination 用法相同。


## 最佳实践

1. 构造页码导航

	```js
	seajs.use(['js/6v/lib/icbu/pagination/pagination-creator.js'], function(PaginationCreator) {
		var pagination = PaginationCreator.factory({
			current: 1,
			total: 100,
			onTurn: function(to, _self, ev) {
				var from = _self.get('current');
				alert('从第 ' + from + ' 页转跳到第 ' + to + ' 页');
			}
		});
	});
	```

2. 构造简化的页码导航

	```js
	seajs.use(['js/6v/lib/icbu/pagination/pagination-creator.js'], function(PaginationCreator) {
		var pagination = PaginationCreator.factory({
			current: 1,
			total: 100,
			type: 'simplified',
			onTurn: function(to, _self, ev) {
				var from = _self.get('current');
				alert('从第 ' + from + ' 页转跳到第 ' + to + ' 页');
			}
		});
	});
	```