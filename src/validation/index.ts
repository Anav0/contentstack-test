export type RuleKey = "min_max" | "required"

export interface Rule {
    key: RuleKey,
    message_template: string,
}

export interface MinMaxRule extends Rule {
    max: number,
    min: number,
}

export function minMaxValidation(label: string, value: string, rule: MinMaxRule) {
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

export function required(label: string, value: any, rule: Rule) {
    let msg = ""

    const type = typeof value;

    if (type == "number" && value === null || value === undefined) {
        msg = rule.message_template.replace("{{FIELD_NAME}}", label)
        return [false, msg];
    } else {
        if (!value) {
            msg = rule.message_template.replace("{{FIELD_NAME}}", label)
            return [false, msg];
        }
    }

    return [true, msg];
}
