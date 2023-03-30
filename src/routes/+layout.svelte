<script lang="ts">
    import 'bulma/css/bulma.min.css'
    import '../globals.css'

    import NavBar from '$components/NavBar.svelte'
    import Footer from '$components/Footer.svelte'
</script>

<div class="layout container">
    <NavBar />
    <div class="content px-4 pt-3 pb-6">
        <slot />
    </div>
    <Footer />
</div>

<style lang="scss">
    .layout {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    .content {
        flex-grow: 1;
    }
</style>
