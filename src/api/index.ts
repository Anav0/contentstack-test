import type {CsForm, CsFormKeys} from "../../../contentstack-test/src/contentstack";

export async function getCsForm<T extends CsForm>(form_key: CsFormKeys) {
    const res = await fetch(`https://our.contentstack.com/entries/${form_key}`);
    return await res.json() as T;
}