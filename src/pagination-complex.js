define(function(require, exports, module) {
	var $ = require('$'),
		Pagination = require('./pagination'),
		Templatable = require('templatable'),
		utils = require('./utils'),
	
		NORMAL_TYPE = 'normal',
		SINPLIFIED_TYPE = 'simplified',
		PaginationComplex;
	
	/**
	 * 带dpl的dom自生成的翻页组件
	 */
	PaginationComplex = Pagination.extend({
		Implements: [Templatable],
		
		attrs: {
			type: {
				value: NORMAL_TYPE,
				setter: function(val){
					// 默认是 NORMAL_TYPE
					if(!val){
						val = NORMAL_TYPE;
					}
					
					return val;
				}
			}
		},
		
		// override
		// 重载，加入对 model 和 template 的处理
		parseElement: function(){
			this._setupModelAndTpl();
			
			PaginationComplex.superclass.parseElement.call(this);
		},
		
		// 赋值
		_setupModelAndTpl: function(){
			var type = this.get('type'),
				current = this.get('current'),
				total = this.get('total'),
				model, tpl;
			
			// 要面向未来兼容
			model = utils.getModel(type, {
				current: current,
				total: total
			});
			this.model = model;
			this.set('model', model);
			
			if(this.get('template') == '<div></div>'){
				tpl = utils.getTpl(type);
				this.template = tpl;
				this.set('template', tpl);
			}
		},
		
		// resetUI
		_resetUI: function(){
			this._setupModelAndTpl();
			
			var element = $(this.compile());
			
			this.element.html(element.html());
			
			element = null;
		},
		
		// onRender相关
		_onRenderCurrent: function(){
			if(this.rendered){
				this._resetUI();
			}
		},
		_onRenderTotal: function(){
			if(this.rendered){
				this._resetUI();
			}
		}
	});
	
	module.exports = PaginationComplex;
});
