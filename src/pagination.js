define(function(require, exports, module) {
    var $ = require('$'),
		Widget = require('widget'),

        ATTRS = {},
		ROLE_PREV = 'prev',
		ROLE_NEXT = 'next',
		ROLE_INPUT = 'input',
		ROLE_SUBMIT = 'submit',
        Pagination;

    /**
     * 当前页码
     */
    ATTRS['current'] = {
    	setter: function(val, prev){
    		val = parseInt(val, 10);
    		
    		return isNaN(val) ? prev : val;
    	},
        value: 1
    };

    /**
     * 总页数
     */
    ATTRS['total'] = {
    	setter: function(val, prev){
    		val = parseInt(val, 10);
    		
    		return isNaN(val) ? prev : val;
    	},
        value: 1
    };

    /**
     * 页面链接规则
     */
    ATTRS['urlRule'] = {
        value: ''
    };

    /**
     * 页码转义符号
     */
    ATTRS['pageEscape'] = {
        value: '%page%'
    };

    /**
     * 加工处理翻页区块事件, 对页码点击和表单翻页事件进行处理.
     *
     * @extends Widget
     */
    Pagination = Widget.extend({
        attrs: ATTRS,

		events: {
			'click a': '_handleLinks',
			'click [data-role=submit]': '_handleForm'
		},

		/**
		 * 翻页
		 */
		page: function(page) {
			this._turning(page);
		},

        /**
         * 上一页
         */
		prev: function() {
			this._turning(this.get('current') - 1);
		},

        /**
         * 下一页
         */
		next: function() {
			this._turning(this.get('current') + 1);
		},

        /**
         * 第一页
         */
		first: function() {
			this._turning(1);
		},

        /**
         * 最后一页
         */
		last: function() {
			this._turning(this.get('total'));
		},

        /**
         * 绑定链接点击事件
         */
		_handleLinks: function(ev) {
			var link = $(ev.target);
			var role = link.attr('data-role');

			if(role === ROLE_PREV) {
				this._turning(this.get('current') - 1, ev);
			} else if(role === ROLE_NEXT) {
				this._turning(this.get('current') + 1, ev);
			} else {
				this._turning(link.text(), ev);
			}
		},

        /**
         * 绑定表单按钮点击事件
         */
		_handleForm: function(ev) {
			var text = this.$('[data-role=' + ROLE_INPUT + ']');

			// 如果没有页码输入框, 不用绑定该处理
			if(text.length !== 1) {
				return;
			}
			
			// 去除所有非数字
			var page = text.val().replace(/\D/g, '');

			// 获得新页码
			page = parseInt(page, 10);

			// 清空输入域
			text.val('');

			// 如果页码取整后不是数字, 并不进行翻页
			if(isNaN(page)) {
				return false;
			}
			this._turning(page, ev);
		},

        /**
         * 翻页处理
         */
		_turning: function(page, ev) {
			var ev = ev || null;

			// 页码取整
			page = parseInt(page, 10);

			// 如果页码不是数字, 则不处理
			if(isNaN(page)) {
				return false;

			// 如果页码小于最小页码, 则当作第一页来处理
			} else if(page < 1) {
				page = 1;

			// 如果页码大于现在总页数, 则当做最大页数来处理
			} else if(page > this.get('total')) {
				page = this.get('total');
			}

			// 如果自定义翻转事件, 则执行它
			if(this._isCustomTurn()) {
				this.trigger('turn', page, this, ev || null);

			// 如果没有自定义翻转事件, 翻转到页面的 URL
			} else {
				var url = this.get('urlRule').replace(this.get('pageEscape'), page);
				$(location).attr('href', url);
			}

			// 修改当前页码
			//this.set('current', page); // 如果 UI 不变不需要修改, 如果 UI 改变可以一起在外层修改
		},

        /**
         * 判断是否存在自定义翻转事件
         */
		_isCustomTurn: function() {
			if(this.__events && this.__events['turn']) {
				return true;
			}
			return false;
		}
		
    });

    module.exports = Pagination;

});
