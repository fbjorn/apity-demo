<script lang="ts">
    import PetsList from '$components/PetsList.svelte'
    import type { PageData } from './$types'

    export let data: PageData
</script>

<div class="columns is-centered">
    <div class="column is-half-tablet">
        {#if !data.error}
            <p class="mb-4 has-text-centered">
                No loading spinners on client, data is fetched on server during SSR.
            </p>
            <PetsList pets={data.pets} />
        {:else}
            <p class="error">Failed to load pets. Please try again later.</p>
        {/if}
    </div>
</div>
<div class="code-snippet" />

<style lang="scss">
</style>
