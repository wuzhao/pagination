define(function(require, exports, module) {
	var NORMAL_TYPE = 'normal',
		SINPLIFIED_TYPE = 'simplified';
	
	/**
     * 构造一般的页码导航数据模型。
     */
	function buildNormalModel(options) {
		var model = options;
		var current = parseInt(options.current, 10);
		var total = parseInt(options.total, 10);

		// 如果当前页码比页面总数还大, 证明存在问题, 不现实页码导航
		if (current > total) {
			return options;
		}

		// 页码断裂处
		var pageBreak = {breaks: true};

		// 当前页面
		var pageCurrent = {current: true};

		// 第一页和最后一页
		var pageFirst = {page: 1};
		var pageLast = {page: total};

		// 上一页, 如果在第一页, 上一页都不可点
		var pagePrevious = {prev: true};
		if (current === 1) {
			pagePrevious.disabled = true;
		}

		// 下一页, 如果在最后一页, 下一页都不可点
		var pageNext = {next: true};
		if (current === total) {
			pageNext.disabled = true;
		}

		var items = [];

		// 上一页
		items.push(pagePrevious);

		// 如果总页数不超过 8 页, 全部页码显示
		if(total <= 8) {
			for(var i=1,len=total; i<=len; i++) {
				if(i === current) {
					pageCurrent.page = i;
					items.push(pageCurrent);
				} else {
					items.push({page: i});
				}
			}

		// 如果当前页在第 6 页之前, 与前面是连通的
		} else if(current <= 6) {
			for(var i=1,len=7; i<=len; i++) {
				if(i === current) {
					pageCurrent.page = i;
					items.push(pageCurrent);
				} else {
					items.push({page: i});
				}
			}
			items.push(pageBreak);
			items.push(pageLast);

		// 如果当前页离最后一页距离不超过 5, 与后面是连通的
		} else if(total - current <= 5) {
			items.push(pageFirst);
			items.push(pageBreak);
			for(var i=total-6,len=total; i<=len; i++) {
				if(i === current) {
					pageCurrent.page = i;
					items.push(pageCurrent);
				} else {
					items.push({page: i});
				}
			}

		// 其他情况前后都会断开
		} else {
			items.push(pageFirst);
			items.push(pageBreak);
			for(var i=current-1,len=current+3; i<=len; i++) {
				if(i === current) {
					pageCurrent.page = i;
					items.push(pageCurrent);
				} else {
					items.push({page: i});
				}
			}
			items.push(pageBreak);
			items.push(pageLast);
		}

		// 下一页
		items.push(pageNext);

		model.items = items;
		return model;
	}
	
	/**
     * 构造简化的页码导航数据模型。
     */
	function buildSimplifiedModel(options) {
		var model = options;
		var current = parseInt(options.current, 10);
		var total = parseInt(options.total, 10);

		var items = [];

		// 左边的链接
		items[0] = {prev: true};
		if(current === 1) {
			items[0].disabled = true;
		}

		// 右边的链接链接
		items[1] = {next: true};
		if(current === total) {
			items[1].disabled = true;
		}

		model.items = items;
		return model;
	}

    /**
     * 工具方法，负责生成 model 及 template
     *
     */
    return {
		getModel: function(type, options) {
			var model;
			
			type = type || NORMAL_TYPE;
			
			switch(type){
				case NORMAL_TYPE:
					model = buildNormalModel(options);
					break;
				case SINPLIFIED_TYPE:
					model = buildSimplifiedModel(options);
					break;
				default:
					model = options;
			}
			
			return model;
		},
		
		getTpl: function(type){
			var template;
			
			type = type || NORMAL_TYPE;
			
			switch(type){
				case NORMAL_TYPE:
					template = require('./pagination.tpl');
					break;
				case SINPLIFIED_TYPE:
					template = require('./pagination-simplified.tpl');
					break;
				default:
					template = require('./pagination.tpl');
			}
			
			return template;
		}
	};
});
