<script lang="ts">
    import type { components } from '$lib/petstore'
    import { addPet } from '$lib/api'

    let name = 'Doggo'
    let photoUrl = ''
    let tagsString = 'Nice,Cute'
    let status: 'available' | 'sold' | 'pending' = 'available'

    let pet: components['schemas']['Pet'] | undefined = undefined
    let error = ''
    let loading = false

    async function onSubmit() {
        loading = true
        pet = undefined
        error = ''

        const tags = tagsString ? tagsString.split(',').map((tag, i) => ({ name: tag, id: i })) : []

        // try editing the arguments. there's an autocomplete & validation
        // based on OpenAPI spec, which is neat
        const request = addPet({ name, tags, photoUrls: [photoUrl] })
        const response = await request.result
        if (response.ok) {
            console.log(response.data)
            pet = response.data
        } else {
            error = 'Failed to create a pet'
        }
        loading = false
    }
</script>

<div class="columns is-centered">
    <div class="column is-half-tablet is-one-third-desktop">
        <p class="mb-5">This page sends a POST request to create a pet</p>
        <form on:submit|preventDefault={onSubmit}>
            <div class="field">
                <label class="label" for="name">Name</label>
                <div class="control">
                    <input
                        id="name"
                        class="input"
                        type="text"
                        placeholder="Pet name"
                        bind:value={name}
                    />
                </div>
            </div>
            <div class="field">
                <label class="label" for="photoUrl">Photo</label>
                <div class="control">
                    <input
                        id="photoUrl"
                        class="input"
                        type="text"
                        placeholder="Photo URL"
                        bind:value={photoUrl}
                    />
                </div>
            </div>
            <div class="field">
                <label class="label" for="tags">Tags</label>
                <div class="control">
                    <input
                        id="tags"
                        class="input"
                        type="text"
                        placeholder="Tags"
                        bind:value={tagsString}
                    />
                </div>
                <p class="help">Comma separated list of tags</p>
            </div>
            <div class="field">
                <label class="label" for="tags">Status</label>
                <div class="control select is-fullwidth">
                    <select bind:value={status}>
                        <option value="available">Available</option>
                        <option value="sold">Sold</option>
                        <option value="pending">Pending</option>
                    </select>
                </div>
            </div>
            <button type="submit" class="button is-primary" class:is-loading={loading}>
                Create
            </button>
        </form>

        <div class="result mt-6">
            {#if pet}
                <div>Your pet has been created:</div>
                <div><strong>Name: </strong>{pet.name}</div>
                <div><strong>Tags: </strong>{pet.tags.map((t) => t.name).join(', ')}</div>
                <div><strong>ID: </strong>{pet.id}</div>
            {:else if error}
                <p>{error}</p>
            {/if}
        </div>
    </div>
</div>
<div class="code-snippet" />

<style lang="scss">
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .result {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
