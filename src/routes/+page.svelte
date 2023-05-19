<script lang="ts">
    import paymentsForm from "../mock/forms/payments.json"
    import beneficiaryForm from "../mock/forms/beneficiary.json"
    import type {BeneficiaryForm, PaymentsForm} from "../contentstack";
    import {
        Header,
        HeaderNav,
        HeaderNavItem,
        SkipToContent,
        Content, Tabs, Tab, TabContent, Button, FormGroup, Form, Grid, Row, Column,
    } from "carbon-components-svelte";
    import CsForm from "../components/CsForm.svelte";

    let payment_form = paymentsForm as PaymentsForm;
    let beneficiary_form = beneficiaryForm as BeneficiaryForm;

</script>

<div>
    <Header platformName="Contentstack">
        <svelte:fragment slot="skip-to-content">
            <SkipToContent/>
        </svelte:fragment>
        <!--        <HeaderNav>-->
        <!--            <HeaderNavItem href="/payments" text="Payments form"/>-->
        <!--            <HeaderNavItem href="/bene" text="Beneficiary"/>-->
        <!--        </HeaderNav>-->
    </Header>

    <Content>
        <Grid>
            <Row>
                <Column/>
                <Column md={4}>
                    <Tabs type="container">
                        <Tab label="Payments"/>
                        <Tab label="Beneficiary"/>
                        <svelte:fragment slot="content">
                            <TabContent>
                                <CsForm content="{payment_form}"/>
                            </TabContent>
                            <TabContent>
                                <CsForm content="{beneficiary_form}"/>
                            </TabContent>
                        </svelte:fragment>
                    </Tabs>
                </Column>
                <Column/>
            </Row>
        </Grid>

    </Content>
</div>

<style>
</style>