import type { FormattingOption } from "../contentstack";

function uppercase(value: string) { 
    return value.toLocaleUpperCase();
}

function lowercase(value: string) { 
    return value.toLocaleLowerCase();
}

function turncateFirstName(value: string) { 
    let splited = value.split(" ");

    if(splited.length < 2) return value;

    return `${splited[0].charAt(0).toUpperCase()}. ${splited[1]}`
}

export function getFormattingFn(formatting_option: FormattingOption) {
    switch (formatting_option) {
        case "turncateFirstName": return turncateFirstName;
        case "lowercase": return lowercase;
        case "uppercase": return uppercase;
    }
}