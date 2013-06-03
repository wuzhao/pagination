define(function(require, exports, module) {
	var $ = require('$'),
		Base = require('base'),
		Pagination = require('pagination'),
		Templatable = require('templatable'),
		utils = require('./utils'),

		NORMAL_TYPE = 'normal',
		SINPLIFIED_TYPE = 'simplified',
		PaginationCreator;

    /**
     * 创建页码导航区块, 并绑定翻页事件.
     *
     * @extends Base
     */
    PaginationCreator = Base.extend({
		Implements: [Templatable],

		factory: function(options) {
			var current = options.current || 1;
			var total = options.total || 1;
			var type = options.type || NORMAL_TYPE;
			var onTurn = options.onTurn  || null;

			// 生成页码导航对象
			var element = this._generatePagination({
				current: current,
				total: total,
				type: type
			});

			// 为页码导航对象绑定事件
			var pagination = new Pagination({
				element: element,
				current: current,
				total: total
			});
			pagination.on('turn', onTurn);

			return element;
		},

        /**
         * 生成页码导航的 jQuery 对象。
         */
		_generatePagination: function(options) {
			var current = options.current;
			var total = options.total;
			var type = options.type;

			if(options.type === SINPLIFIED_TYPE) {
				return $(this.compile(utils.getTpl(type), utils.getModel(type, {
					current: current,
					total: total
				})));
			}

			return $(this.compile(utils.getTpl(type), utils.getModel(type, {
				current: current,
				total: total
			})));
		}
	});

    module.exports = new PaginationCreator();

});
