export interface Metadata {
}

export type CsFormKeys = "payments_form" | "user_management_form"
export type FieldType = "string" | "number" | "bool";
export type FieldCategory = "CsField" | "CsDropdown" | "CsApiDropdown";
export type FormattingOption = "uppercase" | "lowercase" | "capitalize";
export type SortingOption = "textCaseSensitive" | "auto";
export type FilteringOption = "equals" | "auto";

export interface CsForm {
    id: string,
    metadata: Metadata,
    elements: CsFormElement[]
}

export interface CsFormElement {
    id: string,
    field_type: FieldType,
    field_category: FieldCategory,
    formatting: FormattingOption,
}

export interface CsField extends CsFormElement {
    label: string;
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