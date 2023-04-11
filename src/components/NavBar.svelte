<script lang="ts">
    let isOpened = false

    function toggleMenu() {
        isOpened = !isOpened
    }

    function closeMenu() {
        isOpened = false
    }

    const LINKS = [
        { href: '/', title: 'Home' },
        { href: '/ssr', title: 'SSR' },
        { href: '/await', title: '{#await}' },
        { href: '/find-pet', title: 'Find pet' },
        { href: '/post', title: 'Create pet' }
    ]
</script>

<nav class="navbar mb-6" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="https://github.com/cocreators-ee/apity">
            <img src="/logo.svg" alt="apity logo" />
        </a>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-missing-attribute -->
        <a
            on:click={toggleMenu}
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
        >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" class:is-active={isOpened}>
        <div class="navbar-start">
            {#each LINKS as link}
                <a href={link.href} class="navbar-item" on:click={closeMenu}>{link.title}</a>
            {/each}
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <a
                        href="https://github.com/fbjorn/apity-demo"
                        target="_blank"
                        rel="noreferrer"
                        class="button"
                    >
                        <strong>GitHub</strong>
                    </a>
                </div>
            </div>
        </div>
    </div>
</nav>

<style lang="scss">
    .navbar-brand .navbar-item img {
        width: 100%;
        height: 100%;
        max-height: 4rem;
        max-width: 6rem;
    }
</style>
