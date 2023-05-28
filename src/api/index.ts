import type { CsFormModel, CsFormKeys } from "../contentstack"

export async function getCsForm<T extends CsFormModel>(form_key: CsFormKeys) {
    const res = await fetch(`https://our.contentstack.com/entries/${form_key}`);
    return await res.json() as T;
}