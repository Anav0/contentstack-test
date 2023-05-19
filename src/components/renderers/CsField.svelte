<script lang="ts">
    import {
        TextInput,
        NumberInput, Checkbox
    } from "carbon-components-svelte";

    import type {CsField} from "../../contentstack";
    import validate from "../../rules";
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();

    export let element: CsField;
    export let value = null

    let errors = []

    function performValidation(e) {
        if (!e.target) return;

        errors = validate(element, e.target.value)

        dispatch('validation', { errors });
    }
</script>

<div>
    {#if element.field_type === "string"}
        <TextInput
                on:blur={(e) => performValidation(e)}
                on:paste={(e) => performValidation(e)}
                on:keydown={(e) => performValidation(e)}
                name="{element.field_id}"
                bind:value={value}
                invalid="{errors.length}"
                invalidText="{errors.join(', ')}"
                placeholder="{element.label}"/>

    {:else if element.field_type === "number"}
        <NumberInput
                on:blur={(e) => performValidation(e)}
                on:paste={(e) => performValidation(e)}
                on:keydown={(e) => performValidation(e)}
                name="{element.field_id}"
                bind:value={value}
                invalid="{errors.length}"
                invalidText="{errors.join(', ')}"
                placeholder="{element.label}"/>

    {:else if element.field_type === "bool"}
        <Checkbox
                on:blur={(e) => performValidation(e)}
                on:paste={(e) => performValidation(e)}
                on:keydown={(e) => performValidation(e)}
                name="{element.field_id}"
                bind:checked={value}
                invalid="{errors.length}"
                invalidText="{errors.join(', ')}"
                labelText="{element.label}"
        />
    {/if}

</div>