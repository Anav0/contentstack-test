<script lang="ts">
    import {Button, Column, Form, FormGroup, Grid, Row} from "carbon-components-svelte";
    import CsField from "./renderers/CsField.svelte";
    import CsDropdown from "./renderers/CsDropdown.svelte";
    import type {CsFormModel} from "../contentstack";

    export let content: CsFormModel | null;

    let form_model = {}

    function submit() {
        console.log(form_model)
    }
</script>

{#if content == null}
    <div>No content was send to component</div>
{:else}
    <Form class="cs-form" on:submit={submit}>
        <FormGroup>
            {#each content.elements as element, i}
                {#if element.field_category === "CsDropdown"}
                    <CsDropdown bind:value={form_model[element.field_id]} element="{element}"/>
                {/if}
                {#if element.field_category === "CsField"}
                    <CsField bind:value={form_model[element.field_id]} element="{element}"/>
                {/if}
            {/each}
        </FormGroup>
        <Button on:click={submit}>
            Submit
        </Button>
    </Form>
{/if}