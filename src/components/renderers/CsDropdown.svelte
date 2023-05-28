<script lang="ts">
    import {Select, SelectItem, TextInput} from "carbon-components-svelte";
    import type {CsDropdownModel} from "../../contentstack";
    import validate from "../../rules";
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();

    export let element: CsDropdownModel;
    export let value = ""

    let errors: string[] = []

    function performValidation(e: any) {
        if (!e.target) return;
        errors = validate(element, e.target.value)
        dispatch('validation', { errors });
    }
    
</script>

<Select
        on:change={(e) => performValidation(e)}
        on:input={(e) => performValidation(e)}
        bind:selected={value}
        invalid="{errors.length > 0}"
        invalidText="{errors.join(', ')}"
>
    {#each element.labels as label, i}
        <SelectItem value={element.values[i]} text="{label}"/>
    {/each}
</Select>