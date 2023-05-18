<script lang="ts">
    import type {CsField} from "../../contentstack";
    import validate from "../../validation";
    import Errors from "../Errors.svelte";

    export let element: CsField;

    export let value = ""

    let errors = []

    function performValidation(e) {
        errors = validate(element, e.target.value)
    }

</script>

<div>
    <label for={element.field_id}>
        {element.label}
    </label>
    <input on:input={(e) => performValidation(e)} name="{element.field_id}" bind:value={value}
           placeholder="{element.label}">

    <Errors bind:errors="{errors}"/>
</div>