<div class="ui-pagination ui-pagination-body util-clearfix">
	<div class="ui-pagination-navi util-left">
		{{#each items}}
			{{! 当前页面 }}
			{{#if current}}
				<span class="ui-pagination-active">{{page}}</span>
			{{else}}

				{{! 页码链接 }}
				{{#if page}}
					<a href="javascript:void(0);">{{page}}</a>
				{{else}}

					{{! 页码断裂处 }}
					{{#if breaks}}
						 <span>...</span>
					{{else}}

						{{! 上一页 }}
						{{#if prev}}
							{{#if disabled}}
								<span class="ui-pagination-prev ui-pagination-disabled" data-role="prev">previous</span>
							{{else}}
								<a class="ui-pagination-prev" data-role="prev" href="javascript:void(0);">previous</a>
							{{/if}}
						{{else}}

							{{! 下一页 }}
							{{#if next}}
								{{#if disabled}}
									<span class="ui-pagination-next ui-pagination-disabled" data-role="next">next</span>
								{{else}}
									<a class="ui-pagination-next" data-role="next" href="javascript:void(0);">next</a>
								{{/if}}
							{{else}}

							{{/if}} {{! END 下一页 }}
						{{/if}} {{! END 上一页 }}
					{{/if}} {{! END 页码断裂处 }}
				{{/if}} {{! END 页码链接 }}
			{{/if}} {{! END 当前页面 }}
		{{/each}}
	</div>
	<div class="ui-pagination-goto util-right">
		<label class="ui-label">
			Go to Page
			<input type="text" maxlength="3" class="ui-textfield ui-textfield-system" size="3" data-role="input" />
		</label>
		<button class="ui-button ui-button-normal ui-button-small" data-role="submit">Go</button>
	</div>
</div>

