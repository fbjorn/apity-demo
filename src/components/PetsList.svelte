<script lang="ts">
    import type { components } from '$lib/petstore'

    export let limit = 8
    export let pets: components['schemas']['Pet'][]

    const filteredPets = pets.slice(0, limit)
    const total = pets.length
</script>

<p class="has-text-centered">Showing first {limit} / {total} pets.</p>
<ol>
    {#each filteredPets as pet}
        <li>
            <div><b>Name:</b> {pet.name}</div>
            <div><b>ID:</b> {pet.id}</div>
            {#if pet.tags && pet.tags.length > 0}
                <div>
                    <b>Tags:</b>
                    {#each pet.tags as tag}
                        <span class="tag">{tag.name}</span>
                    {/each}
                </div>
            {/if}
        </li>
    {/each}
</ol>

<style lang="scss">
    ol {
        padding-left: 1.5rem;
    }

    li {
        margin: 1rem 0;
        padding: 0 0 1rem 0;
        border-bottom: 1px solid #f3f0f0;
    }

    li:last-of-type {
        border-bottom: none;
    }

    .tag {
        margin-right: 0.5rem;
    }
</style>
