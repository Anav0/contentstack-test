<script lang="ts">
  import { Button, Column, Form, FormGroup, Grid, Row } from "carbon-components-svelte";
  import CsField from "./renderers/CsField.svelte";
  import CsDropdown from "./renderers/CsDropdown.svelte";
  import type { CsFormModel } from "../contentstack";
  import CsApiDropdown from "./renderers/CsApiDropdown.svelte";

  export let content: CsFormModel | null;

  let form_model: any = {};
  let form_errors: any = {};

  function submit() {
    console.log("ERRORS", form_errors);
    console.log("MODEL", form_model);
  }

  function recordFieldError(errors: string[], field_id: string) {
    form_errors[field_id] = errors;
  }

  $: haveAnyErrors = haveErr(form_errors);

  function haveErr(form_errors: any) {
    for (const id of Object.keys(form_errors)) {
      if (form_errors[id].length) return true;
    }

    return false;
  }
</script>

{#if content == null}
  <h1>No content was send to component</h1>
{:else}
  <Form class="cs-form" on:submit={submit}>
    {#each content.elements as element, i}
      {#if element.field_category === "CsDropdown"}
        <CsDropdown
          on:validation={(e) => recordFieldError(e.detail.errors, element.field_id)}
          bind:value={form_model[element.field_id]}
          {element}
        />
      {/if}
      {#if element.field_category === "CsField"}
        <CsField
          on:validation={(e) => recordFieldError(e.detail.errors, element.field_id)}
          bind:errors={form_errors[element.field_id]}
          bind:value={form_model[element.field_id]}
          {element}
        />
      {/if}
      {#if element.field_category === "CsApiDropdown"}
        <CsApiDropdown
          on:validation={(e) => recordFieldError(e.detail.errors, element.field_id)}
          bind:errors={form_errors[element.field_id]}
          bind:value={form_model[element.field_id]}
          {element}
        />
      {/if}
    {/each}
    <Button disabled={haveAnyErrors} on:click={submit}>Submit</Button>
  </Form>
{/if}
