<script lang="ts">
    import 'bulma/css/bulma.min.css'
    import '../globals.css'

    import NavBar from '$components/NavBar.svelte'
    import Footer from '$components/Footer.svelte'
</script>

<div class="layout">
    <div class="wrapper container">
        <NavBar />
        <div class="content px-4 pt-3 pb-6">
            <slot />
        </div>
    </div>
    <Footer />
</div>

<style lang="scss">
    .layout {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    .wrapper {
        width: 100%;
    }

    .content {
        flex-grow: 1;
    }
</style>
