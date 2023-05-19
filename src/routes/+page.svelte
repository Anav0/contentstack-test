<script lang="ts">
    import paymentsForm from "../mock/forms/payments.json"
    import type {PaymentsForm} from "../contentstack";
    import CsDropdown from "../components/renderers/CsDropdown.svelte";
    import CsField from "../components/renderers/CsField.svelte";
    import {
        Form,
        FormGroup,
        Header,
        HeaderNav,
        HeaderNavItem,
        HeaderNavMenu,
        SkipToContent,
        Content,
        Grid,
        Button,
        Row,
        Column,
    } from "carbon-components-svelte";

    let form = paymentsForm as PaymentsForm;

    let form_model = {}

    function submit() {
        console.log(form_model)
    }

</script>

<div>
    <Header platformName="Contentstack">
        <svelte:fragment slot="skip-to-content">
            <SkipToContent/>
        </svelte:fragment>
        <HeaderNav>
            <HeaderNavItem href="/payments" text="Payments form"/>
            <HeaderNavItem href="/bene" text="Beneficiary"/>
        </HeaderNav>
    </Header>

    <Content>
        <Grid>
            <Row>
                <Column/>
                <Column md={4}>
                    <Form class="cs-form" on:submit={submit}>
                        <FormGroup>
                            {#each form.elements as element, i}
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
                </Column>
                <Column/>
            </Row>
        </Grid>
    </Content>
</div>

<style>
    .cs-form {
    }
</style>