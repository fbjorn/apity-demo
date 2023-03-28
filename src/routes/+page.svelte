<div>
    <h1 class="title has-text-centered mt-6">Welcome to Apity demo</h1>
    <div class="block">
        <p>This is a demo application using Petstore OpenAPI spec.</p>
        <p>
            We tried to combine together different use cases of the library, and for your
            convenience they are located in separate files, so feel free to check them out:
        </p>
    </div>

    <div class="links mt-6">
        <div class="box">
            <a href="/ssr" class="section-link">SSR</a>
            <div>Data is fetched in <span class="code">+page.server.ts</span></div>
        </div>
        <div class="box">
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
            <div>Plus an option to reload the same request</div>
        </div>
        <div class="box">
            <a href="/find-pet" class="section-link">Path parameters</a>
            <div>Fetching an API route that has a path parameter.</div>
            <div>This page also shows the <span class="code">ApiResponse</span> structure</div>
        </div>
        <div class="box">
            <a href="/error" class="section-link">POST request</a>
            <div>Sending a JSON to server</div>
        </div>
    </div>
</div>

<style>
    .links {
        display: flex;
        flex-direction: column;
        width: 30rem;
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
</style>
