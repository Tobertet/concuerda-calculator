import { Band } from '../types';
import { SERVICES_COMBINATIONS } from './servicesCombinations';
import { SOLOISTS } from './soloists';

export const BANDS: Band[] = [
    {
        name: 'Piano',
        ceremonyPrice: 550,
        cocktailPrice: 800,
        feastPrice: 950,
        partyPrice: undefined,
        serviceCombinations: SERVICES_COMBINATIONS.ALL,
        canHaveCandles: true,
        canHaveGrandPiano: true,
        availableSoloists: SOLOISTS.CHORUSES,
    },
    {
        name: 'Dúo Cantante & Guitarra',
        ceremonyPrice: 400,
        cocktailPrice: 500,
        feastPrice: 600,
        partyPrice: undefined,
        serviceCombinations:
            SERVICES_COMBINATIONS.CEREMONY_AND_COCKTAIL_OR_FEAST,
        canHaveCandles: true,
        canHaveGrandPiano: false,

        // Exclude Laura Soprano from the list of soloists
        availableSoloists: SOLOISTS.SINGERS_AND_GUITAR.filter(
            (soloist) =>
                soloist.name !== 'Laura Soprano' &&
                soloist.name !== 'Elvira Soul' &&
                soloist.name !== 'Art Gipsy' &&
                soloist.name !== 'Carmen Jazz' &&
                soloist.name !== 'Sofía Bossa'
        ),
    },
    {
        name: 'Dúo Cantante & Piano',
        ceremonyPrice: 400,
        cocktailPrice: 500,
        feastPrice: 600,
        partyPrice: undefined,
        serviceCombinations:
            SERVICES_COMBINATIONS.CEREMONY_AND_COCKTAIL_OR_FEAST,
        canHaveCandles: true,
        canHaveGrandPiano: true,
        availableSoloists: SOLOISTS.SINGERS_AND_PIANO.filter(
            (soloist) =>
                soloist.name !== 'Art Gipsy' && soloist.name !== 'Carmen Jazz'
        ),
    },
    {
        name: 'Trío Cantante & Piano & Guitarra',
        ceremonyPrice: 800,
        cocktailPrice: 950,
        feastPrice: 1050,
        partyPrice: undefined,
        serviceCombinations:
            SERVICES_COMBINATIONS.CEREMONY_AND_COCKTAIL_OR_FEAST,
        canHaveCandles: true,
        canHaveGrandPiano: true,
        availableSoloists: SOLOISTS.SINGERS_AND_PIANO_AND_GUITAR.filter(
            (soloist) =>
                soloist.name !== 'Laura Soprano' &&
                soloist.name !== 'Art Gipsy' &&
                soloist.name !== 'Carmen Jazz'
        ),
    },
    {
        name: 'Latin Quartet',
        ceremonyPrice: undefined,
        cocktailPrice: 1950,
        feastPrice: 2300,
        partyPrice: undefined,
        serviceCombinations:
            SERVICES_COMBINATIONS.EITHER_PARTY_OR_FEAST_OR_COCKTAIL,
        canHaveCandles: true,
        canHaveGrandPiano: false,
        availableSoloists: SOLOISTS.NONE,
    },
    {
        name: '2Cellos',
        ceremonyPrice: 800,
        cocktailPrice: 1050,
        feastPrice: 1250,
        partyPrice: undefined,
        serviceCombinations:
            SERVICES_COMBINATIONS.CEREMONY_AND_COCKTAIL_OR_FEAST,
        canHaveCandles: true,
        canHaveGrandPiano: false,
        availableSoloists: SOLOISTS.NONE,
    },
    {
        name: 'Jazz Quartet',
        ceremonyPrice: undefined,
        cocktailPrice: 1950,
        feastPrice: 2300,
        partyPrice: undefined,
        serviceCombinations: SERVICES_COMBINATIONS.COCKTAIL_AND_FEAST,
        canHaveCandles: true,
        canHaveGrandPiano: true,
        availableSoloists: SOLOISTS.NONE,
    },
    {
        name: 'Jazz Trio',
        ceremonyPrice: undefined,
        cocktailPrice: 1650,
        feastPrice: 2000,
        partyPrice: undefined,
        serviceCombinations: SERVICES_COMBINATIONS.COCKTAIL_AND_FEAST,
        canHaveCandles: true,
        canHaveGrandPiano: true,
        availableSoloists: SOLOISTS.DAN_AND_ELVIRA_AND_SOFIA,
    },
    {
        name: 'Soul Quintet',
        ceremonyPrice: undefined,
        cocktailPrice: 2400,
        feastPrice: 2850,
        partyPrice: undefined,
        serviceCombinations: SERVICES_COMBINATIONS.COCKTAIL_AND_FEAST,
        canHaveCandles: true,
        canHaveGrandPiano: true,
        availableSoloists: SOLOISTS.NONE,
    },
    {
        name: 'Camerata Concuerda',
        ceremonyPrice: 2750,
        cocktailPrice: undefined,
        feastPrice: undefined,
        partyPrice: undefined,
        serviceCombinations: SERVICES_COMBINATIONS.ONLY_CEREMONIES,
        canHaveCandles: true,
        canHaveGrandPiano: false,
        availableSoloists: SOLOISTS.CHORUSES,
    },
    {
        name: 'Coro Concuerda',
        ceremonyPrice: 1800,
        cocktailPrice: undefined,
        feastPrice: undefined,
        partyPrice: undefined,
        serviceCombinations: SERVICES_COMBINATIONS.ONLY_CEREMONIES,
        canHaveCandles: true,
        canHaveGrandPiano: false,
        availableSoloists: SOLOISTS.NONE,
    },
    {
        name: 'Concuerda & Co Dúo',
        ceremonyPrice: 800,
        cocktailPrice: 1050,
        feastPrice: 1350,
        partyPrice: undefined,
        serviceCombinations: SERVICES_COMBINATIONS.ALL_EXCLUDING_PARTY,
        canHaveCandles: true,
        canHaveGrandPiano: true,
        availableSoloists: SOLOISTS.ALL_EXCEPT_INSTRUMENTED_VOICE,
    },
    {
        name: 'Concuerda & Co Trío',
        ceremonyPrice: 950,
        cocktailPrice: 1250,
        feastPrice: 1550,
        partyPrice: undefined,
        serviceCombinations: SERVICES_COMBINATIONS.ALL_EXCLUDING_PARTY,
        canHaveCandles: true,
        canHaveGrandPiano: true,
        availableSoloists: SOLOISTS.ALL_EXCEPT_INSTRUMENTED_VOICE,
    },
    {
        name: 'Concuerda & Co Cuarteto',
        ceremonyPrice: 1100,
        cocktailPrice: 1450,
        feastPrice: 1800,
        partyPrice: undefined,
        serviceCombinations: SERVICES_COMBINATIONS.ALL_EXCLUDING_PARTY,
        canHaveCandles: true,
        canHaveGrandPiano: false,
        availableSoloists: SOLOISTS.ALL_EXCEPT_INSTRUMENTED_VOICE,
    },
    {
        name: 'Trio Concuerda',
        ceremonyPrice: 1650,
        cocktailPrice: 2400,
        feastPrice: 2850,
        partyPrice: undefined,
        serviceCombinations: SERVICES_COMBINATIONS.ALL_EXCLUDING_PARTY,
        canHaveCandles: true,
        canHaveGrandPiano: false,
        availableSoloists: SOLOISTS.ALL_EXCEPT_INSTRUMENTED_VOICE,
    },
    {
        name: 'Gipsy Band',
        ceremonyPrice: undefined,
        cocktailPrice: 3000,
        feastPrice: 3400,
        partyPrice: 3400,
        serviceCombinations: SERVICES_COMBINATIONS.PARTY_AND_COCKTAIL_OR_FEAST,
        canHaveCandles: true,
        canHaveGrandPiano: false,
        availableSoloists: SOLOISTS.ART_AND_CARMEN_AND_DAN,
    },
    {
        name: 'Gipsy Band (Trio)',
        ceremonyPrice: undefined,
        cocktailPrice: 2300,
        feastPrice: 2700,
        partyPrice: 2700,
        serviceCombinations: SERVICES_COMBINATIONS.PARTY_AND_COCKTAIL_OR_FEAST,
        canHaveCandles: true,
        canHaveGrandPiano: false,
        availableSoloists: SOLOISTS.NONE,
    },
    {
        name: 'Crooner Band',
        ceremonyPrice: undefined,
        cocktailPrice: 2350,
        feastPrice: 2800,
        partyPrice: undefined,
        serviceCombinations: SERVICES_COMBINATIONS.COCKTAIL_AND_FEAST,
        canHaveCandles: true,
        canHaveGrandPiano: true,
        availableSoloists: SOLOISTS.SAXOS,
    },
    {
        name: 'String Band',
        ceremonyPrice: undefined,
        cocktailPrice: 3300,
        feastPrice: 3850,
        partyPrice: 3850,
        serviceCombinations: SERVICES_COMBINATIONS.PARTY_AND_COCKTAIL_OR_FEAST,
        canHaveCandles: true,
        canHaveGrandPiano: true,
        availableSoloists: SOLOISTS.ALL_EXCEPT_INSTRUMENTED_VOICE.filter(
            (soloist) =>
                ![
                    'Art Gipsy',
                    'Carmen Jazz',
                    'Elvira Soul',
                    'Laura Soprano',
                    'Carmen Jazz',
                    'Sofía Bossa',
                    'Fred Sax',
                    'Inoidel Sax',
                ].includes(soloist.name)
        ),
    },
    {
        name: 'Pop Band',
        ceremonyPrice: undefined,
        cocktailPrice: 1600,
        feastPrice: 1950,
        partyPrice: 2200,
        serviceCombinations: SERVICES_COMBINATIONS.PARTY_AND_COCKTAIL_OR_FEAST,
        canHaveCandles: true,
        canHaveGrandPiano: false,
        availableSoloists: SOLOISTS.ALL_EXCEPT_INSTRUMENTED_VOICE.filter(
            (soloist) =>
                [
                    'Maryna Pop',
                    'Natalia Pop',
                    'Toni Pop',
                    'Andrea Pop',
                    'Rolita',
                    'Tony Funky',
                    'Tayra',
                    'Andrea R&B',
                    'Fred Sax',
                    'Inoidel Sax',
                ].includes(soloist.name)
        ),
    },
    {
        name: 'Rock Band',
        ceremonyPrice: undefined,
        cocktailPrice: 1900,
        feastPrice: undefined,
        partyPrice: 2800,
        serviceCombinations: SERVICES_COMBINATIONS.PARTY_AND_COCKTAIL,
        canHaveCandles: true,
        canHaveGrandPiano: false,
        availableSoloists: SOLOISTS.ALL_EXCEPT_INSTRUMENTED_VOICE.filter(
            (soloist) =>
                [
                    'Luis Rock',
                    'Álvaro Indie',
                    'Fred Sax',
                    'Inoidel Sax',
                ].includes(soloist.name)
        ),
    },
    {
        name: 'Funky Band',
        ceremonyPrice: undefined,
        cocktailPrice: 2200,
        feastPrice: undefined,
        partyPrice: 3000,
        serviceCombinations: SERVICES_COMBINATIONS.PARTY_AND_COCKTAIL,
        canHaveCandles: true,
        canHaveGrandPiano: false,
        availableSoloists: SOLOISTS.ALL_EXCEPT_INSTRUMENTED_VOICE.filter(
            (soloist) =>
                [
                    'Rolita',
                    'Tony Funky',
                    'Andrea R&B',
                    'Tayra',
                    'Natalia Pop',
                    'Fred Sax',
                    'Inoidel Sax',
                ].includes(soloist.name)
        ),
    },
    {
        name: 'Dúo Flamenco',
        ceremonyPrice: undefined,
        cocktailPrice: 1400,
        feastPrice: 1800,
        partyPrice: undefined,
        serviceCombinations:
            SERVICES_COMBINATIONS.EITHER_PARTY_OR_FEAST_OR_COCKTAIL,
        canHaveCandles: true,
        canHaveGrandPiano: false,
        availableSoloists: SOLOISTS.NONE,
    },
    {
        name: 'Dúo Indie',
        ceremonyPrice: undefined,
        cocktailPrice: 1400,
        feastPrice: 1800,
        partyPrice: undefined,
        serviceCombinations:
            SERVICES_COMBINATIONS.EITHER_PARTY_OR_FEAST_OR_COCKTAIL,
        canHaveCandles: true,
        canHaveGrandPiano: false,
        availableSoloists: SOLOISTS.NONE,
    },
    {
        name: 'Coro Gospel',
        ceremonyPrice: 2700,
        cocktailPrice: 3500,
        feastPrice: 3500,
        partyPrice: undefined,
        serviceCombinations:
            SERVICES_COMBINATIONS.CEREMONY_AND_COCKTAIL_OR_FEAST,
        canHaveCandles: true,
        canHaveGrandPiano: false,
        availableSoloists: SOLOISTS.NONE,
    },
    {
        name: 'Saxo Lounge',
        ceremonyPrice: undefined,
        cocktailPrice: 1000,
        feastPrice: 1150,
        partyPrice: 1150,
        serviceCombinations: SERVICES_COMBINATIONS.PARTY_AND_COCKTAIL_OR_FEAST,
        canHaveCandles: true,
        canHaveGrandPiano: false,
        availableSoloists: SOLOISTS.SAXOS.filter(
            (item) => item.name !== 'Vicent Sax'
        ),
    },
    {
        name: 'Dúo Saxo & Piano',
        ceremonyPrice: 950,
        cocktailPrice: 1250,
        feastPrice: 1600,
        partyPrice: undefined,
        serviceCombinations: SERVICES_COMBINATIONS.ALL_EXCLUDING_PARTY,
        canHaveCandles: true,
        canHaveGrandPiano: true,
        availableSoloists: SOLOISTS.SAXOS,
    },
    {
        name: 'Bossa Nova Band',
        ceremonyPrice: undefined,
        cocktailPrice: 2350,
        feastPrice: 2800,
        partyPrice: undefined,
        serviceCombinations: SERVICES_COMBINATIONS.COCKTAIL_AND_FEAST,
        canHaveCandles: true,
        canHaveGrandPiano: true,
        availableSoloists: SOLOISTS.SAXOS,
    },
];
