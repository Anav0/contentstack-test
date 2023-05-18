<script lang="ts">
    import type {CsDropdown} from "../../contentstack";

    export let element: CsDropdown;

    export let value = ""

</script>

<select bind:value={value}>
    {#each element.labels as label, i}
        <option value={element.values[i]}>{label}</option>
    {/each}
</select>