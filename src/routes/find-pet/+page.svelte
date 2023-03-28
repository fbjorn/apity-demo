<script lang="ts">
	import Spinner from '$components/Spinner.svelte';
	import { getPetsById } from '$lib/api';

	let loading = false;
	let resp = '';
	let petId = 1337;

	async function fetchPets() {
		loading = true;
		const request = getPetsById({ petId: petId });
		const response = await request.result;
		resp = JSON.stringify(response, null, 2);
		loading = false;
	}
</script>

<div class="form">
	<p>This page demostrates the structure of an API Response</p>
	<p>You could try your luck on some common IDs like "123"</p>
	<div class="field">
		<label class="label" for="petId">Pet ID</label>
		<div class="control">
			<input id="petId" class="input" type="text" placeholder="ID" bind:value={petId} />
		</div>
		<p class="help">Entering a very long ID causes different backend error</p>
	</div>
	<button on:click={fetchPets} class="button is-primary">Fetch</button>
	{#if loading}
		<Spinner />
	{:else if resp}
		<div>ApiResponse:</div>
		<pre>{resp}</pre>
	{/if}
</div>
<div class="code-snippet" />

<style lang="scss">
	.form {
		width: 35rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 0 auto;
	}
</style>
