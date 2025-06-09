export enum Locale {
  UK = 'uk',
  EN = 'en',
}

type TranslationValue = string | string[] | TranslationMap;

interface TranslationMap {
  [key: string]: TranslationValue;
}

export type Messages = TranslationMap;