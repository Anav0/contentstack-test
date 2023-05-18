<script lang="ts">
    import type {CsField} from "../../contentstack";

    export let element: CsField;

    export let value = ""

</script>

<div>
    <label>
        {element.label}
    </label>
    <input bind:value={value} placeholder="{element.label}">
</div>