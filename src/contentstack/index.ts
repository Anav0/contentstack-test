import type {Rule} from "../rules";

export interface Metadata {
    created: Date,
    modified: Date,
    created_by: string,
    modified_by: string,
}

export type CsFormKeys = "payments_form" | "beneficiary_form"
export type FieldType = "string" | "number" | "bool";
export type FieldCategory = "CsField" | "CsDropdown" | "CsApiDropdown";
export type FormattingOption = "uppercase" | "lowercase" | "capitalize" | "turncateFirstName";
export type SortingOption = "textCaseSensitive" | "auto";
export type FilteringOption = "equals" | "auto";

export interface CsFormModel {
    id: string,
    title: string,
    metadata: Metadata,
    elements: CsFormElement[]
}

export interface CsFormElement {
    id: string,
    label: string;
    field_type: FieldType,
    field_id: string,
    field_category: FieldCategory,
    formatting: FormattingOption,

    rules?: Rule[]
}

export interface CsFieldModel extends CsFormElement {
}

export interface CsDropdownModel extends CsFormElement {
    values: string[],
    labels: string[],
    default_value: number,
}

export interface CsApiDropdownModel extends CsFormElement {
    endpoint: string,
    model_value_path?: string,
    model_label_path?: string,
    formatting_option?: FormattingOption,
}

export interface CsApiDropdownModel extends CsFormElement {
    endpoint: string;
}

export interface PaymentsForm extends CsFormModel {}
export interface BeneficiaryForm extends CsFormModel {}
