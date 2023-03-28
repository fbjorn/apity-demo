<script lang="ts">
    import type { PageData } from './$types'
    import PetsGrid from '$components/PetsGrid.svelte'

    export let data: PageData
</script>

<div>
    {#if !data.error}
        <PetsGrid pets={data.pets} />
    {:else}
        <div class="error">Failed to load pets. Please try again later.</div>
    {/if}
</div>
<div class="code-snippet" />
