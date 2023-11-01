import { Soloist, SoloistCategoryPrices } from '../types';
import { SERVICES_COMBINATIONS } from './servicesCombinations';

const PRICES_BY_CATEGORY: SoloistCategoryPrices = {
    A: {
        ceremonyPrice: 500,
        cocktailPrice: 600,
        feastPrice: 700,
        partyPrice: 900,
    },
    B: {
        ceremonyPrice: 600,
        cocktailPrice: 700,
        feastPrice: 850,
        partyPrice: 1100,
    },
    C: {
        ceremonyPrice: 750,
        cocktailPrice: 850,
        feastPrice: 950,
        partyPrice: 1650,
    },
};

export const ALL: Soloist[] = [
    // Categoria A
    {
        name: 'Maryna Pop',
        instrument: 'voice',
        ...PRICES_BY_CATEGORY.A,
        serviceCombinations: SERVICES_COMBINATIONS.ALL,
    },
    {
        name: 'Andrea Pop',
        instrument: 'voice',
        ...PRICES_BY_CATEGORY.A,
        serviceCombinations: SERVICES_COMBINATIONS.ALL,
    },
    {
        name: 'Iván Flamenco',
        instrument: 'voice',
        ...PRICES_BY_CATEGORY.A,
        serviceCombinations: SERVICES_COMBINATIONS.ALL_EXCLUDING_PARTY,
    },
    {
        name: 'Natalia Pop',
        instrument: 'voice',
        ...PRICES_BY_CATEGORY.A,
        serviceCombinations: SERVICES_COMBINATIONS.ALL_EXCLUDING_PARTY,
    },
    {
        name: 'Elvira Soul',
        instrument: 'voice',
        ...PRICES_BY_CATEGORY.A,
        serviceCombinations: SERVICES_COMBINATIONS.ALL_EXCLUDING_PARTY,
    },
    {
        name: 'Laura Soprano',
        instrument: 'voice',
        ...PRICES_BY_CATEGORY.A,
        serviceCombinations: SERVICES_COMBINATIONS.ONLY_CEREMONIES,
    },
    {
        name: 'Álvaro Indie',
        instrument: 'voice',
        ...PRICES_BY_CATEGORY.A,
        serviceCombinations: SERVICES_COMBINATIONS.ALL,
    },
    // Categoria B
    {
        name: 'Tony Funky',
        instrument: 'voice',
        ...PRICES_BY_CATEGORY.B,
        serviceCombinations: SERVICES_COMBINATIONS.ALL_EXCLUDING_PARTY,
    },
    {
        name: 'Toni Pop',
        instrument: 'voice',
        ...PRICES_BY_CATEGORY.B,
        serviceCombinations: SERVICES_COMBINATIONS.ALL_EXCLUDING_PARTY,
    },
    {
        name: 'Andrea R&B',
        instrument: 'voice',
        ...PRICES_BY_CATEGORY.B,
        serviceCombinations: SERVICES_COMBINATIONS.ALL,
    },
    {
        name: 'Fred Sax',
        instrument: 'saxo',
        ...PRICES_BY_CATEGORY.B,
        serviceCombinations: SERVICES_COMBINATIONS.ALL,
    },
    {
        name: 'Vicent Sax',
        instrument: 'saxo',
        ...PRICES_BY_CATEGORY.B,
        serviceCombinations: SERVICES_COMBINATIONS.COCKTAIL_AND_FEAST,
    },
    {
        name: 'Tayra',
        instrument: 'voice',
        ...PRICES_BY_CATEGORY.B,
        serviceCombinations: SERVICES_COMBINATIONS.ALL_EXCLUDING_PARTY,
    },
    {
        name: 'Sofía Bossa',
        instrument: 'voice',
        ...PRICES_BY_CATEGORY.B,
        serviceCombinations: SERVICES_COMBINATIONS.ALL_EXCLUDING_PARTY,
    },
    {
        name: 'Dan Crooner',
        instrument: 'voice',
        ...PRICES_BY_CATEGORY.B,
        serviceCombinations: SERVICES_COMBINATIONS.ALL_EXCLUDING_PARTY,
    },
    // Categoria C
    {
        name: 'Art Gipsy',
        instrument: 'voice',
        ...PRICES_BY_CATEGORY.C,
        serviceCombinations: SERVICES_COMBINATIONS.COCKTAIL_AND_FEAST,
    },
    {
        name: 'Rolita',
        instrument: 'voice',
        ...PRICES_BY_CATEGORY.C,
        serviceCombinations: SERVICES_COMBINATIONS.ALL_EXCLUDING_PARTY,
    },
    {
        name: 'Carmen Jazz',
        instrument: 'voice',
        ...PRICES_BY_CATEGORY.C,
        serviceCombinations: SERVICES_COMBINATIONS.COCKTAIL_AND_FEAST,
    },
    {
        name: 'Luis Rock',
        instrument: 'voice',
        ...PRICES_BY_CATEGORY.C,
        serviceCombinations: SERVICES_COMBINATIONS.ALL_EXCLUDING_PARTY,
    },
    {
        name: 'Inoidel Sax',
        instrument: 'saxo',
        ...PRICES_BY_CATEGORY.C,
        serviceCombinations: SERVICES_COMBINATIONS.ALL,
    },
    // Categoria X
    {
        name: 'Coro Concuerda',
        instrument: 'chorus',
        serviceCombinations: SERVICES_COMBINATIONS.ONLY_CEREMONIES,
        ceremonyPrice: 1800,
        cocktailPrice: undefined,
        feastPrice: undefined,
        partyPrice: undefined,
    },
    {
        name: 'Coro Gospel',
        instrument: 'chorus',
        serviceCombinations: SERVICES_COMBINATIONS.ALL_EXCLUDING_PARTY,
        ceremonyPrice: 2700,
        cocktailPrice: 3500,
        feastPrice: 3500,
        partyPrice: undefined,
    },
    {
        name: 'Iván Flamenco (Guitarra & Voz)',
        instrument: 'voice-guitar',
        serviceCombinations:
            SERVICES_COMBINATIONS.EITHER_CEREMONY_OR_FEAST_OR_COCKTAIL,
        ceremonyPrice: 300,
        cocktailPrice: 300,
        feastPrice: 300,
        partyPrice: undefined,
    },
    {
        name: 'Toni Pop (Guitarra & Voz)',
        instrument: 'voice-guitar',
        serviceCombinations:
            SERVICES_COMBINATIONS.EITHER_CEREMONY_OR_FEAST_OR_COCKTAIL,
        ceremonyPrice: 400,
        cocktailPrice: 400,
        feastPrice: 400,
        partyPrice: undefined,
    },
    {
        name: 'Luis Rock (Guitarra & Voz)',
        instrument: 'voice-guitar',
        serviceCombinations:
            SERVICES_COMBINATIONS.EITHER_CEREMONY_OR_FEAST_OR_COCKTAIL,
        ceremonyPrice: 500,
        cocktailPrice: 500,
        feastPrice: 500,
        partyPrice: undefined,
    },
    {
        name: 'Dan Crooner (Piano & Voz)',
        instrument: 'voice-piano',
        serviceCombinations:
            SERVICES_COMBINATIONS.EITHER_CEREMONY_OR_FEAST_OR_COCKTAIL,
        ceremonyPrice: 400,
        cocktailPrice: 400,
        feastPrice: 400,
        partyPrice: undefined,
    },
    {
        name: 'Rolita (Piano & Voz)',
        instrument: 'voice-piano',
        serviceCombinations:
            SERVICES_COMBINATIONS.EITHER_CEREMONY_OR_FEAST_OR_COCKTAIL,
        ceremonyPrice: 500,
        cocktailPrice: 500,
        feastPrice: 500,
        partyPrice: undefined,
    },
];

export const SINGERS = ALL.filter((soloist) => soloist.instrument === 'voice');

export const SAXOS = ALL.filter((soloist) => soloist.instrument === 'saxo');

export const CHORUSES = ALL.filter(
    (soloist) => soloist.instrument === 'chorus'
);

export const ELVIRA_AND_CARMEN = ALL.filter(
    (soloist) =>
        soloist.name === 'Elvira Soul' || soloist.name === 'Carmen Jazz'
);

export const DAN_AND_ELVIRA_AND_SOFIA = ALL.filter(
    (soloist) =>
        soloist.name === 'Elvira Soul' ||
        soloist.name === 'Sofía Bossa' ||
        soloist.name === 'Dan Crooner'
);

export const ART_AND_CARMEN_AND_DAN = ALL.filter(
    (soloist) =>
        soloist.name === 'Art Gipsy' ||
        soloist.name === 'Dan Crooner' ||
        soloist.name === 'Carmen Jazz'
);

export const ALL_EXCEPT_INSTRUMENTED_VOICE = ALL.filter(
    (soloist) =>
        soloist.instrument !== 'voice-guitar' &&
        soloist.instrument !== 'voice-piano'
);

const SINGERS_AND_GUITAR = ALL.filter(
    (soloist) =>
        soloist.instrument === 'voice' || soloist.instrument === 'voice-guitar'
);

const SINGERS_AND_PIANO = ALL.filter(
    (soloist) =>
        soloist.instrument === 'voice' || soloist.instrument === 'voice-piano'
);

const SINGERS_AND_PIANO_AND_GUITAR = ALL.filter(
    (soloist) =>
        soloist.instrument === 'voice' ||
        soloist.instrument === 'voice-piano' ||
        soloist.instrument === 'voice-guitar'
);

export const SOLOISTS = {
    ALL,
    SINGERS,
    NONE: [],
    ELVIRA_AND_CARMEN,
    DAN_AND_ELVIRA_AND_SOFIA,
    CHORUSES,
    ALL_EXCEPT_INSTRUMENTED_VOICE,
    SINGERS_AND_PIANO,
    SINGERS_AND_GUITAR,
    SINGERS_AND_PIANO_AND_GUITAR,
    ART_AND_CARMEN_AND_DAN,
    SAXOS,
};

// Higher the price of the soloists a 10%
export const SOLOISTS_WITH_10_PERCENT_MORE = ALL.map((soloist) => ({
    ...soloist,
    ceremonyPrice: soloist.ceremonyPrice
        ? soloist.ceremonyPrice * 1.1
        : undefined,
    cocktailPrice: soloist.cocktailPrice
        ? soloist.cocktailPrice * 1.1
        : undefined,
    feastPrice: soloist.feastPrice ? soloist.feastPrice * 1.1 : undefined,
    partyPrice: soloist.partyPrice ? soloist.partyPrice * 1.1 : undefined,
}));
