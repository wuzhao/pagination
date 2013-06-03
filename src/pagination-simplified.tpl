<div class="ui-pagination ui-pagination-pager util-clearfix">
	{{#each items}}
		{{! 上一页 }}
		{{#if prev}}
			{{#if disabled}}
				<span class="ui-pagination-prev ui-pagination-disabled" data-role="prev">previous</span>
			{{else}}
				<a class="ui-pagination-prev" data-role="prev" href="javascript:void(0);">previous</a>
			{{/if}}

		{{! 下一页 }}
		{{else}}
			{{#if disabled}}
				<span class="ui-pagination-next ui-pagination-disabled" data-role="next">next</span>
			{{else}}
				<a class="ui-pagination-next" data-role="next" href="javascript:void(0);">next</a>
			{{/if}}

		{{/if}}
	{{/each}}

	<label class="ui-label">
		{{current}} of {{total}} Page
	</label>
</div>
