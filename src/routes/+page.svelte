<div>
    <h1 class="title has-text-centered mt-6">Apity Demo</h1>
    <div class="block">
        <p>
            <a href="https://github.com/cocreators-ee/apity" target="_blank" rel="noreferrer">
                Apity
            </a>
            is library for
            <a href="https://svelte.dev/" target="_blank" rel="noreferrer">Svelte</a>
            and
            <a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit</a>
            applications designed to simplify working with network requests.
        </p>
        <p>
            The main benefit of Apity is typing, because each function representing an API call has
            typed request and response. In order to generate them you need an OpenAPI spec. In this
            application we use one from <a href="https://petstore3.swagger.io/">Petstore</a>.
        </p>
        <p>
            We tried to combine here different use cases of the library, and for your convenience
            each of them is located under a separate route and all examples have a source code
            snippet.
        </p>
        <p />
    </div>

    <div class="columns mt-6">
        <div class="column is-one-third-desktop">
            <a href="/ssr" class="section-link">SSR</a>
            <div>Data in this example is fetched in <span class="code">+page.server.ts</span></div>
        </div>
        <div class="column is-one-third-desktop">
            <a href="/await" class="section-link">Using #await syntax</a>
            <div>
                <a
                    href="https://svelte.dev/docs#template-syntax-await"
                    target="_blank"
                    rel="noreferrer"
                >
                    Svelte way
                </a> of handling promises in templates.
            </div>
            <div>This example also shows how the request can be reloaded on some action.</div>
        </div>
        <div class="column is-one-third-desktop">
            <a href="/find-pet" class="section-link">Path parameters</a>
            <div>Fetching an API route that has a path parameter.</div>
            <div>
                This example also describes the <span class="code">ApiResponse</span> structure
            </div>
        </div>
    </div>
    <div class="columns mt-6">
        <div class="column is-one-third-desktop">
            <a href="/post" class="section-link">POST request</a>
            <div>An example of sending a JSON to server</div>
        </div>
    </div>
</div>

<style>
    .links {
        display: flex;
        flex-direction: column;
        /* width: 30rem; */
        margin: 0 auto;
    }

    .code {
        background-color: aliceblue;
        padding: 0.25rem;
        border-radius: 5px;
    }

    .section-link {
        font-size: 1.25rem;
        font-weight: 600;
    }

    .box {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    p {
        margin: 0.5rem 0;
    }
</style>
