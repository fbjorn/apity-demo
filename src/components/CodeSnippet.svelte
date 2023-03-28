<script lang="ts">
	import { HighlightAuto } from 'svelte-highlight';
	import theme from 'svelte-highlight/styles/atom-one-light';

	type SourceFile = {
		path: string;
		code: string;
	};
	export let snippets: SourceFile[];

	let isExpanded = true;
</script>

<svelte:head>
	{@html theme}
</svelte:head>

<div class="source-code-wrapper">
	<button
		class="button"
		on:click={() => {
			isExpanded = !isExpanded;
		}}
		>{isExpanded ? 'Hide' : 'Show'} source code
	</button>
	{#if isExpanded}
		{#each snippets as snippet}
			<div class="snippet">
				<div class="filename">{snippet.path}</div>
				<HighlightAuto code={snippet.code} />
			</div>
		{/each}
	{/if}
</div>

<style lang="scss">
	.source-code-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		margin: 2rem 0;
	}

	.snippet {
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 1rem;
	}

	.filename {
		font-weight: 600;
	}

	:global(.source-code-wrapper pre) {
		background: none;
		padding: 0;
	}

	:global(.source-code-wrapper code) {
		border-radius: 10px;
		width: 100%;
	}
</style>
