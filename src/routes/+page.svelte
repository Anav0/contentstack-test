<script lang="ts">
    import paymentsForm from "../mock/forms/payments.json"
    import type {PaymentsForm} from "../contentstack";
    import CsDropdown from "../components/renderers/CsDropdown.svelte";

    let form = paymentsForm as PaymentsForm;

</script>

<h1>Contentstack forms test</h1>

<h2>{form.id}</h2>>
<form>
    {#each form.elements as element, i}
        {#if element.field_category === "CsDropdown"}
            <CsDropdown element="{element}"/>
        {/if}
    {/each}
</form>
