import { Soloist, SoloistCategoryPrices } from '../types';
import { SERVICES_COMBINATIONS } from './servicesCombinations';

const PRICES_BY_CATEGORY: SoloistCategoryPrices = {
    A: {
        ceremonyPrice: 450,
        cocktailPrice: 550,
        feastPrice: 650,
        partyPrice: 800,
    },
    B: {
        ceremonyPrice: 550,
        cocktailPrice: 650,
        feastPrice: 750,
        partyPrice: 1000,
    },
    C: {
        ceremonyPrice: 650,
        cocktailPrice: 750,
        feastPrice: 850,
        partyPrice: 1500,
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
        name: 'Iván Rumba',
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
        name: 'Tayra',
        instrument: 'voice',
        ...PRICES_BY_CATEGORY.B,
        serviceCombinations: SERVICES_COMBINATIONS.ALL_EXCLUDING_PARTY,
    },
    {
        name: 'Sofia Bossa',
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
        serviceCombinations: SERVICES_COMBINATIONS.ALL_EXCLUDING_PARTY,
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
        serviceCombinations: SERVICES_COMBINATIONS.ALL_EXCLUDING_PARTY,
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
];

export const SINGERS = ALL.filter((soloist) => soloist.instrument === 'voice');

export const ELVIRA_AND_CARMEN = ALL.filter(
    (soloist) =>
        soloist.name === 'Elvira Soul' || soloist.name === 'Carmen Jazz'
);

export const DAN_AND_ELVIRA_AND_CARMEN = ALL.filter(
    (soloist) =>
        soloist.name === 'Elvira Soul' ||
        soloist.name === 'Carmen Jazz' ||
        soloist.name === 'Dan Crooner'
);

export const SOLOISTS = {
    ALL,
    SINGERS,
    NONE: [],
    ELVIRA_AND_CARMEN,
    DAN_AND_ELVIRA_AND_CARMEN,
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
