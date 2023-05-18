<script lang="ts">
    import type {CsField} from "../../contentstack";

    export let element: CsField;

    export let value = ""

</script>

<input bind:value={value} placeholder="{element.label}">