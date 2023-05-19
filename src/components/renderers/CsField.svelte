<script lang="ts">
    import {
        TextInput,
        NumberInput
    } from "carbon-components-svelte";

    import type {CsField} from "../../contentstack";
    import validate from "../../validation";
    import Errors from "../Errors.svelte";

    export let element: CsField;

    export let value = ""

    let errors = []

    function performValidation(e) {
        if (!e.target) return;
        errors = validate(element, e.target.value)
    }

</script>

<div>
    <TextInput
            on:blur={(e) => performValidation(e)}
            on:paste={(e) => performValidation(e)}
            on:keydown={(e) => performValidation(e)}
            name="{element.field_id}"
            bind:value={value}
            invalid="{errors.length}"
            invalidText="{errors.join(', ')}"
            placeholder="{element.label}"/>


</div>