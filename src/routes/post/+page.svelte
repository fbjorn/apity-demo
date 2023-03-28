<script lang="ts">
    import type { components } from '$lib/petstore'
    import Pet from '$components/Pet.svelte'
    import { addPet } from '$lib/api'

    let loading = false

    let name = 'Doggo'
    let photoUrl = ''
    let tagsString = 'Nice,Cute'
    let status: 'available' | 'sold' | 'pending' = 'available'

    let pet: components['schemas']['Pet'] | undefined = undefined
    let rawResp = ''

    async function onSubmit() {
        loading = true
        pet = undefined
        rawResp = ''

        const tags = tagsString ? tagsString.split(',').map((tag, i) => ({ name: tag, id: i })) : []

        // try editing the arguments. there's an autocomplete & validation
        // based on OpenAPI spec, which is neat
        const request = addPet({ name, tags, photoUrls: [photoUrl] })
        const response = await request.result
        if (response.ok) {
            console.log(response.data)
            pet = response.data
        } else {
            rawResp = JSON.stringify(response, null, 2)
        }
        loading = false
    }
</script>

<div class="wrapper">
    <form class="form" on:submit|preventDefault={onSubmit}>
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
        <button type="submit" class="button is-primary" class:is-loading={loading}>Create</button>
    </form>

    <div class="result mt-6">
        {#if pet}
            <div>Your pet has been created:</div>
            <Pet {pet} />
        {:else if rawResp}
            <pre>{rawResp}</pre>
        {/if}
    </div>
</div>
<div class="code-snippet" />

<style lang="scss">
    .wrapper {
        width: 30rem;
        margin: 0 auto;
    }
    .form {
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
