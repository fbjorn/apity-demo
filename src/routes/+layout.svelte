<script lang="ts">
    import 'bulma/css/bulma.min.css'
    import '../globals.css'

    import NavBar from '$components/NavBar.svelte'
</script>

<div class="container p-4 mb-5">
    <NavBar />
    <slot />
</div>
