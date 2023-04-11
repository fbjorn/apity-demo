<script lang="ts">
    import Spinner from '$components/Spinner.svelte'
    import { getPetsById } from '$lib/api'

    let loading = false
    let resp = ''
    let petId = 1337

    async function fetchPets() {
        loading = true
        const request = getPetsById({ petId: petId })
        const response = await request.result
        resp = JSON.stringify(response, null, 2)
        loading = false
    }
</script>

<div class="columns is-centered">
    <div class="column is-half-tablet is-one-third-desktop">
        <p>This example is trying to find a pet by a given ID</p>
        <p>After data is received, you will see a JSON representation of an ApiResponse object</p>
        <div class="field mt-3">
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
</div>
<div class="code-snippet" />

<style lang="scss">
    .column {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
