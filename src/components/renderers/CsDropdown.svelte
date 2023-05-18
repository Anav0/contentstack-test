<script lang="ts">
    import type {CsDropdown} from "../../contentstack";

    export let element: CsDropdown;

</script>

<select>
    {#each element.labels as label, i}
        <option value="{element.values[i]}">{label}</option>
    {/each}
</select>