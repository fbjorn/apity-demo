<script lang="ts">
    import 'bulma/css/bulma.min.css'
    import '../globals.css'

    import NavBar from '$components/NavBar.svelte'
</script>

<div class="container mt-6">
    <NavBar />
    <slot />
</div>
