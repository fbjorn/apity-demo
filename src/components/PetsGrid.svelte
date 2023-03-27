<script lang="ts">
	import type { components } from '$lib/petstore';
	import Pet from '$components/Pet.svelte';

	export let limit = 12;
	export let pets: components['schemas']['Pet'][];

	const filteredPets = pets.slice(0, limit);
	const total = pets.length;
</script>

<div>
	<h1 class="title has-text-centered">Available pets</h1>
	<div class="has-text-centered my-3">Showing first {limit} entries from {total}</div>
	<div class="pets-grid">
		{#each filteredPets as pet}
			<Pet {pet} />
		{/each}
	</div>
</div>

<style lang="scss">
	.pets-grid {
		display: grid;
		grid-template-columns: auto auto auto auto;
		gap: 1rem;
		justify-content: center;
		justify-items: center;
		align-items: center;
	}
</style>
