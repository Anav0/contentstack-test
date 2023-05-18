import type {Rule} from "../validation";

export interface Metadata {
    created: Date,
    modified: Date,
    created_by: string,
    modified_by: string,
}

export type CsFormKeys = "payments_form" | "user_management_form"
export type FieldType = "string" | "number" | "bool";
export type FieldCategory = "CsField" | "CsDropdown" | "CsApiDropdown";
export type FormattingOption = "uppercase" | "lowercase" | "capitalize";
export type SortingOption = "textCaseSensitive" | "auto";
export type FilteringOption = "equals" | "auto";

export interface CsForm {
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

export interface CsField extends CsFormElement {
}

export interface CsDropdown extends CsFormElement {
    values: string[],
    labels: string[],
    default_value: number,
}

export interface CsApiDropdown extends CsFormElement {
    endpoint: string;
}

export interface PaymentsForm extends CsForm {

}