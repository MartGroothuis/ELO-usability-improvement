import {
  BooleanPreference,
  IntegerRangePreference,
  PreferenceManager,
  StringPreference,
} from "ts-preferences";
import { loggingResponseHandler } from "userscripter/lib/preferences";

import U from "~src/userscript";
import T from "~src/text";

export const P = {
  foobars: {
    label: T.preferences.foobars.label,
    _: {
      insert: new BooleanPreference({
        key: "insert_foobars",
        label: T.preferences.foobars.insert.label,
        description: T.preferences.foobars.insert.description,
        default: true,
      }),
      number: new IntegerRangePreference({
        key: "number_of_foobars",
        label: T.preferences.foobars.number.label,
        description: T.preferences.foobars.number.description,
        min: 0,
        max: 100,
        default: 5,
      }),
    },
  },
  username: new StringPreference({
    key: "username",
    label: T.preferences.username.label,
    description: T.preferences.username.description,
    default: "John Smith",
    multiline: false,
    maxLength: 50,
    constraints: [
      {
        requirement: (v) => !/^\s/.test(v),
        message: (_) => `Leading whitespace not allowed.`,
      },
      {
        requirement: (v) => !/\s$/.test(v),
        message: (_) => `Trailing whitespace not allowed.`,
      },
    ],
  }),
} as const;

export const Preferences = new PreferenceManager(
  P,
  U.id + "-preference-",
  loggingResponseHandler
);
