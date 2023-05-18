export interface Validation {
    name: string,
    key: string,
    message_template: string,
}

export interface MinMaxLength extends Validation {
    max: number,
    min: number,
}

export function minMaxValidation(label: string, value: string, rule: MinMaxLength) {
    if (rule.min > rule.max) throw Error("Min cannot be greater then max! Check your contentstack!");

    let msg = ""
    if (value.length < rule.min || value.length > rule.max) {
        msg = rule.message_template
            .replace("{{FIELD_NAME}}", label)
            .replace("{{MAX}}", rule.max + "")
            .replace("{{MIN}}", rule.min + "");

        return [false, msg];
    }

    return [true, msg];
}