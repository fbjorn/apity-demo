<script lang="ts">
	import type { components } from '$lib/petstore';

	export let pet: components['schemas']['Pet'];

	const tags = pet.tags || [];
</script>

<div class="pet-wrapper">
	<div class="name">{pet.name}</div>
	{#if tags.length > 0}
		<div class="tags">
			{#each tags as tag}
				<div class="tag">{tag.name}</div>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	.pet-wrapper {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		border: 2px solid var(--primary-color);
		border-radius: 8px;
		width: 15rem;
	}

	.name {
		font-size: 1.2rem;
		overflow: auto;
		text-overflow: ellipsis;
	}

	.tags {
		display: flex;
		gap: 0.25rem;
	}
</style>
