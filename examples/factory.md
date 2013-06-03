# JavaScript 构造页码导航

---

<link rel="stylesheet" href="http://style.aliunicorn.com/css/6v/apollo/core/core-ws.css?t=0_0" />
<link rel="stylesheet" href="http://style.aliunicorn.com/css/6v/apollo/mod/pagination/pagination-ws.css?t=0_0" />
<style>
.ui-pagination{font-size:12px;}
</style>

## 构造一般的页码导航

<div id="normal-pagination"></div>

````js
seajs.use(['$', 'js/6v/lib/icbu/pagination/pagination-creator.js'], function($, PaginationCreator) {
	var pagination = PaginationCreator.factory({
		current: 1,
		total: 100,
		onTurn: function(to, _self, ev) {
			var from = _self.get('current');
			alert('从第 ' + from + ' 页转跳到第 ' + to + ' 页');
		}
	});
	$('#normal-pagination').append(pagination);
});
````

## 构造简化的页码导航

<div id="simplified-pagination"></div>

````js
seajs.use(['$', 'js/6v/lib/icbu/pagination/pagination-creator.js'], function($, PaginationCreator) {
	var simplifiedPagination = PaginationCreator.factory({
		current: 1,
		total: 100,
		type: 'simplified',
		onTurn: function(to, _self, ev) {
			var from = _self.get('current');
			alert('从第 ' + from + ' 页转跳到第 ' + to + ' 页');
		}
	});
	$('#simplified-pagination').append(simplifiedPagination);
});
````

## 动态页码导航

<div id="something-wrap"></div>

````js
seajs.use(['$', 'js/6v/lib/icbu/pagination/pagination-creator.js'], function($, PaginationCreator) {
    var refreshPage = function(current, total) {
		// 区块
        var wrap = $('#something-wrap');

		// 内容
		var content = $('<div>这是第 ' + current + ' 页的内容</div>');

		// 页码导航
        var pagination = PaginationCreator.factory({
            current: current,
            total: total,
            onTurn: function(to, _self) {
                var total = _self.get('total');
                refreshPage(to, total);
            }
        });

		// 清空区块内容
		wrap.html('');

		// 将内容和页码导航添加到区块中
		wrap.append(content);
		wrap.append(pagination);
    };

    refreshPage(1, 100);
});
````
