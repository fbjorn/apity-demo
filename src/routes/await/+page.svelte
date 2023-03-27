<script lang="ts">
	import { findPetsByStatus } from '$lib/api';
	import PetsGrid from '$components/PetsGrid.svelte';
	import Spinner from '$components/Spinner.svelte';

	const request = findPetsByStatus({ status: 'available' });
	const ready = request.ready;
</script>

<div>
	{#await $ready}
		<Spinner />
	{:then resp}
		{#if resp && resp.ok}
			<PetsGrid pets={resp.data} />
		{:else}
			<div class="error">Failed to load pets. Please try again later.</div>
		{/if}
		<div class="button-wrapper">
			<button
				class="button"
				on:click={() => {
					request.reload();
				}}
			>
				Refresh
			</button>
		</div>
	{/await}
</div>

<style lang="scss">
	.button-wrapper {
		width: 100%;
	}
	.button {
		margin: 1rem auto;
		display: block;
	}
</style>
