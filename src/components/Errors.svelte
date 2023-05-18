<script>
    export let errors = []
</script>

<ul class="error-list">
    {#each errors as error, i}
        <li class="error">{error}</li>
    {/each}
</ul>

<style>
    .error {
        color: indianred;
        padding: 1rem;
    }

    .error-list {
        list-style: none;
        padding: 0;
        margin: 0;

    }
</style>