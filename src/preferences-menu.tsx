import { h, JSX, render } from "preact";
import {
    AllowedTypes,
    BooleanPreference,
    FromString,
    IntegerRangePreference,
    Preference,
    PreferenceGroup,
    PreferencesObject,
    StringPreference,
} from "ts-preferences";
import { is, isString } from "ts-type-guards";
import { log } from "userscripter";

import * as CONFIG from "~src/config";
import { Preferences } from "~src/preferences";

interface Generators {
    Boolean: (p: BooleanPreference) => JSX.Element
    String: (p: StringPreference) => JSX.Element
    IntegerRange: (p: IntegerRangePreference) => JSX.Element
}

function prefixedId(id: string): string {
    return CONFIG.PREFIX_ID + "option-" + id;
}

export const GENERATORS: Generators = {
    Boolean: Generator_Boolean,
    String: Generator_String,
    IntegerRange: Generator_IntegerRange,
};

export const menuGenerator = menuGeneratorWith(GENERATORS);

function menuGeneratorWith(generators: Generators): (ps: PreferencesObject) => HTMLElement {
    return (ps: PreferencesObject) => {
        const form = document.createElement("form");
        Entries(generators, ps).forEach(entry => {
            render(entry, form);
        });
        form.addEventListener("submit", e => {
            e.preventDefault();
        })
        return form;
    };
}

function changeHandler<
    E extends HTMLElement & { value: string },
    T extends AllowedTypes,
    P extends Preference<T> & FromString<T>,
>(p: P): (e: Event) => void {
    return (e: Event) => {
        const parsed = p.fromString((e.target as E).value);
        if (isString(parsed)) {
            log.warning(parsed);
        } else {
            Preferences.set(p, parsed.value);
        }
    };
}

function Entries(generators: Generators, ps: PreferencesObject): JSX.Element[] {
    return Object.keys(ps).map(k => Entry(generators, ps[k]));
}

function Entry<T extends AllowedTypes>(generators: Generators, p: Preference<T> | PreferenceGroup): JSX.Element {
    return p instanceof Preference
        ? (
            <div id={prefixedId(p.key)} {...{ class: p.extras.class || null }}>
                {InputElement(generators, p)}
                <aside class={CONFIG.CLASS.preferenceDescription}>{p.description}</aside>
            </div>
        ) : (
            <fieldset>
                <legend>{p.label}</legend>
                {Entries(generators, p._)}
            </fieldset>
        );
}

function InputElement<T extends AllowedTypes>(generators: Generators, p: Preference<T>): JSX.Element {
    // Order can be super-important here due to the semantics of instanceof with respect to subclasses.
    if (is(BooleanPreference)(p)) {
        return generators.Boolean(p);
    }
    if (is(StringPreference)(p)) {
        return generators.String(p);
    }
    if (is(IntegerRangePreference)(p)) {
        return generators.IntegerRange(p);
    }
    throw `Unsupported preference: ${p.getClassName()} (with key '${p.key}')`;
}

function Generator_Boolean(p: BooleanPreference): JSX.Element {
    return (
        <label>
            <input type="checkbox" checked={Preferences.get(p)} onChange={e => {
                Preferences.set(p, (e.target as HTMLInputElement).checked);
            }} />
            {p.label}
        </label>
    );
}

function Generator_String(p: StringPreference): JSX.Element {
    return (
        <label>
            {p.label}
            {p.multiline
                ?
                <textarea
                    value={Preferences.get(p)}
                    onChange={changeHandler<HTMLTextAreaElement, string, StringPreference>(p)}
                ></textarea>
                :
                <input
                    type="text"
                    value={Preferences.get(p)}
                    onChange={changeHandler<HTMLInputElement, string, StringPreference>(p)}
                />
            }
        </label>
    );
}

function Generator_IntegerRange(p: IntegerRangePreference): JSX.Element {
    return (
        <label>
            {p.label}
            <input
                type="number"
                value={Preferences.get(p).toString()}
                min={p.min}
                max={p.max}
                onChange={changeHandler<HTMLInputElement, number, IntegerRangePreference>(p)}
            />
        </label>
    );
}
