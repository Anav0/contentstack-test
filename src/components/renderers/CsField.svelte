<script lang="ts">
  import { TextInput, NumberInput, Checkbox } from "carbon-components-svelte";

  import type { CsFieldModel } from "../../contentstack";
  import validate from "../../rules";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let element: CsFieldModel;
  export let value: any = null;

  let errors: string[] = [];

  function performValidation(e: any) {
    if (!e.target) return;

    errors = validate(element, e.target.value);

    dispatch("validation", { errors });
  }
</script>

{#if element == undefined}
  <h1>Loading...</h1>
{:else}
  <div>
    {#if element.field_type === "string"}
      <TextInput
        on:blur={(e) => performValidation(e)}
        on:paste={(e) => performValidation(e)}
        on:keydown={(e) => performValidation(e)}
        name={element.field_id}
        bind:value
        invalid={errors.length > 0}
        invalidText={errors.join(", ")}
        placeholder={element.label}
      />
    {:else if element.field_type === "number"}
      <NumberInput
        on:blur={(e) => performValidation(e)}
        on:paste={(e) => performValidation(e)}
        on:keydown={(e) => performValidation(e)}
        name={element.field_id}
        bind:value
        invalid={errors.length > 0}
        invalidText={errors.join(", ")}
        placeholder={element.label}
      />
    {:else if element.field_type === "bool"}
      <Checkbox
        on:blur={(e) => performValidation(e)}
        on:change={(e) => performValidation(e)}
        required={element?.rules?.find((rule) => rule.key === "required") ? true : false}
        name={element.field_id}
        bind:checked={value}
        labelText={element.label}
      />
    {/if}
  </div>
{/if}
