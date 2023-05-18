<script lang="ts">
    import paymentsForm from "../mock/forms/payments.json"
    import type {PaymentsForm} from "../contentstack";
    import CsDropdown from "../components/renderers/CsDropdown.svelte";
    import CsField from "../components/renderers/CsField.svelte";

    let form = paymentsForm as PaymentsForm;

    let form_model = {}

    function submit() {
        console.log(form_model)
    }

</script>

<h2>{form.title}</h2>
<form class="cs-form">
    {#each form.elements as element, i}
        {#if element.field_category === "CsDropdown"}
            <CsDropdown bind:value={form_model[element.field_id]} element="{element}"/>
        {/if}
        {#if element.field_category === "CsField"}
            <CsField bind:value={form_model[element.field_id]} element="{element}"/>
        {/if}
    {/each}

    <button on:click={submit}>
        Submit
    </button>
</form>

<style>
    .cs-form {
        border: 2px #bebebebe solid;
        padding: 1rem;
        min-height: 400px;
        max-width: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
</style>