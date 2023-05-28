<script lang="ts">
  import { Loading, Select, SelectItem, TextInput } from "carbon-components-svelte";
  import type { CsApiDropdownModel } from "../../contentstack";
  import validate from "../../rules";
  import { createEventDispatcher, onMount } from "svelte";

  const dispatch = createEventDispatcher();

  export let element: CsApiDropdownModel;
  export let value = "";

  let labels: string[] = [];
  let values: any[] = [];

  let errors: string[] = [];
  let isFetching = false;

  function performValidation(e: any) {
    if (!e.target) return;
    errors = validate(element, e.target.value);
    dispatch("validation", { errors });
  }

  async function fetchData() {
    if (!element.endpoint) return;

    try {
      isFetching = true;
      const res = await fetch(element.endpoint);
      const json = await res.json();

      labels = json.map((obj: any) => (element?.model_label_path ? obj[element?.model_label_path] : obj));
      values = json.map((obj: any) => (element?.model_value_path ? obj[element?.model_value_path] : obj));
    } catch (err) {
      console.error(err);
    } finally {
      isFetching = false;
    }
  }

  onMount(async () => {
    await fetchData();
  });
</script>

{#if isFetching}
  <Loading withOverlay={false} />
{:else if (labels.length === 0 || values.length === 0) && !isFetching}
  <h1>Failed to fetch values</h1>
{:else}
  <Select
    on:change={(e) => performValidation(e)}
    on:input={(e) => performValidation(e)}
    bind:selected={value}
    invalid={errors.length > 0}
    invalidText={errors.join(", ")}
  >
    {#each labels as label, i}
      <SelectItem value={values[i]} text={label} />
    {/each}
  </Select>
{/if}
