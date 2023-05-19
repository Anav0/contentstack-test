import type {CsFormElement} from "../contentstack";
import "carbon-components-svelte/css/white.css";

export type RuleKey = "min_max" | "required"

export interface Rule {
    key: RuleKey,
    message_template: string,
}

export interface MinMaxRule extends Rule {
    max: number,
    min: number,
}

export function minMax(label: string, value: string, rule: MinMaxRule): [boolean, string] {
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

export function required(label: string, value: any, rule: Rule): [boolean, string] {
    let msg = ""

    const type = typeof value;

    if (type == "number" && value === null || value === undefined) {
        msg = rule.message_template.replace("{{FIELD_NAME}}", label)
        return [false, msg];
    } else if (type === "string") {
        value = value.trim();
        if (!value) {
            msg = rule.message_template.replace("{{FIELD_NAME}}", label)
            return [false, msg];
        }
    } else if (!value) {
        msg = rule.message_template.replace("{{FIELD_NAME}}", label)
        return [false, msg];

    }

    return [true, msg];
}

export default function validate(field: CsFormElement, value: any) {
    if (!field.rules) return [];

    const messages: string[] = [];
    for (const rule of field.rules) {
        let validationMethod: any;
        switch (rule.key) {
            case "min_max":
                validationMethod = minMax;
                break;
            case "required":
                validationMethod = required;
                break;
        }

        if (!validationMethod) throw new Error(`Unrecognized rule key: '${rule.key}'`)

        const [isValid, error] = validationMethod(field.label, value, rule);
        if (!isValid) messages.push(error)

    }

    return messages
}