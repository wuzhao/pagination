<div class="ui-pagination ui-pagination-body util-clearfix">
	<div class="ui-pagination-navi util-left">
		{{#each items}}
			{{! ��ǰҳ�� }}
			{{#if current}}
				<span class="ui-pagination-active">{{page}}</span>
			{{else}}

				{{! ҳ������ }}
				{{#if page}}
					<a href="javascript:void(0);">{{page}}</a>
				{{else}}

					{{! ҳ����Ѵ� }}
					{{#if breaks}}
						 <span>...</span>
					{{else}}

						{{! ��һҳ }}
						{{#if prev}}
							{{#if disabled}}
								<span class="ui-pagination-prev ui-pagination-disabled" data-role="prev">previous</span>
							{{else}}
								<a class="ui-pagination-prev" data-role="prev" href="javascript:void(0);">previous</a>
							{{/if}}
						{{else}}

							{{! ��һҳ }}
							{{#if next}}
								{{#if disabled}}
									<span class="ui-pagination-next ui-pagination-disabled" data-role="next">next</span>
								{{else}}
									<a class="ui-pagination-next" data-role="next" href="javascript:void(0);">next</a>
								{{/if}}
							{{else}}

							{{/if}} {{! END ��һҳ }}
						{{/if}} {{! END ��һҳ }}
					{{/if}} {{! END ҳ����Ѵ� }}
				{{/if}} {{! END ҳ������ }}
			{{/if}} {{! END ��ǰҳ�� }}
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

