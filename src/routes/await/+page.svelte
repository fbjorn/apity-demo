<script lang="ts">
    import { findPetsByStatus } from '$lib/api'
    import PetsList from '$components/PetsList.svelte'
    import Spinner from '$components/Spinner.svelte'

    const request = findPetsByStatus({ status: 'available' })
    const ready = request.ready
</script>

<div class="columns is-centered">
    <div class="column is-half-tablet">
        <p class="mb-4 has-text-centered">Data is fetched on client</p>
        <button
            class="button is-primary"
            on:click={() => {
                request.reload()
            }}
        >
            Refresh
        </button>

        {#await $ready}
            <Spinner />
        {:then resp}
            {#if resp && resp.ok}
                <PetsList pets={resp.data} />
            {:else}
                <div class="error">Failed to load pets. Please try again later.</div>
            {/if}
        {/await}
    </div>
</div>
<div class="code-snippet" />

<style lang="scss">
    .button {
        margin: 1rem auto;
        display: block;
    }
</style>
