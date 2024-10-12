import { ServiceCombination } from '../types';

const ALL: ServiceCombination[] = [
    { ceremony: true, cocktail: true, feast: true, party: true },
    { ceremony: true, cocktail: true, feast: true, party: false },
    { ceremony: true, cocktail: true, feast: false, party: true },
    { ceremony: true, cocktail: true, feast: false, party: false },
    { ceremony: true, cocktail: false, feast: true, party: true },
    { ceremony: true, cocktail: false, feast: true, party: false },
    { ceremony: true, cocktail: false, feast: false, party: true },
    { ceremony: true, cocktail: false, feast: false, party: false },
    { ceremony: false, cocktail: true, feast: true, party: true },
    { ceremony: false, cocktail: true, feast: true, party: false },
    { ceremony: false, cocktail: true, feast: false, party: true },
    { ceremony: false, cocktail: true, feast: false, party: false },
    { ceremony: false, cocktail: false, feast: true, party: true },
    { ceremony: false, cocktail: false, feast: true, party: false },
    { ceremony: false, cocktail: false, feast: false, party: true },
    { ceremony: false, cocktail: false, feast: false, party: false },
];

const ALL_EXCLUDING_PARTY: ServiceCombination[] = [
    { ceremony: true, cocktail: true, feast: true, party: false },
    { ceremony: true, cocktail: true, feast: false, party: false },
    { ceremony: true, cocktail: false, feast: true, party: false },
    { ceremony: true, cocktail: false, feast: false, party: false },
    { ceremony: false, cocktail: true, feast: true, party: false },
    { ceremony: false, cocktail: true, feast: false, party: false },
    { ceremony: false, cocktail: false, feast: true, party: false },
    { ceremony: false, cocktail: false, feast: false, party: false },
];

const ONLY_CEREMONIES: ServiceCombination[] = [
    { ceremony: true, cocktail: false, feast: false, party: false },
];

const EITHER_CEREMONY_OR_COCKTAIL: ServiceCombination[] = [
    { ceremony: true, cocktail: true, feast: false, party: false },
    { ceremony: true, cocktail: false, feast: false, party: false },
    { ceremony: false, cocktail: true, feast: false, party: false },
];

const CEREMONY_AND_COCKTAIL: ServiceCombination[] = [
    { ceremony: true, cocktail: true, feast: false, party: false },
    { ceremony: true, cocktail: false, feast: false, party: false },
    { ceremony: false, cocktail: true, feast: false, party: false },
];

const CEREMONY_AND_COCKTAIL_OR_FEAST: ServiceCombination[] = [
    { ceremony: true, cocktail: true, feast: false, party: false },
    { ceremony: true, cocktail: false, feast: true, party: false },
    { ceremony: true, cocktail: false, feast: false, party: false },
    { ceremony: false, cocktail: true, feast: false, party: false },
    { ceremony: false, cocktail: false, feast: true, party: false },
];

const PARTY_AND_COCKTAIL_OR_FEAST: ServiceCombination[] = [
    { ceremony: false, cocktail: true, feast: false, party: false },
    { ceremony: false, cocktail: true, feast: false, party: true },
    { ceremony: false, cocktail: false, feast: true, party: false },
    { ceremony: false, cocktail: false, feast: true, party: true },
    { ceremony: false, cocktail: false, feast: false, party: true },
];

const PARTY_AND_COCKTAIL: ServiceCombination[] = [
    { ceremony: false, cocktail: true, feast: false, party: false },
    { ceremony: false, cocktail: true, feast: false, party: true },
    { ceremony: false, cocktail: false, feast: false, party: true },
];

const ONLY_COCKTAIL_OR_FEAST: ServiceCombination[] = [
    { ceremony: false, cocktail: true, feast: false, party: false },
    { ceremony: false, cocktail: false, feast: true, party: false },
];

const COCKTAIL_AND_FEAST: ServiceCombination[] = [
    { ceremony: false, cocktail: true, feast: false, party: false },
    { ceremony: false, cocktail: false, feast: true, party: false },
    { ceremony: false, cocktail: true, feast: true, party: false },
];

const PARTY_AND_COCKTAIL_AND_FEAST: ServiceCombination[] = [
    { ceremony: false, cocktail: true, feast: false, party: false },
    { ceremony: false, cocktail: false, feast: true, party: false },
    { ceremony: false, cocktail: true, feast: true, party: false },
    { ceremony: false, cocktail: false, feast: false, party: true },
    { ceremony: false, cocktail: true, feast: false, party: true },
    { ceremony: false, cocktail: false, feast: true, party: true },
    { ceremony: false, cocktail: true, feast: true, party: true },
];

const EITHER_CEREMONY_OR_FEAST_OR_COCKTAIL: ServiceCombination[] = [
    { ceremony: true, cocktail: false, feast: false, party: false },
    { ceremony: false, cocktail: true, feast: false, party: false },
    { ceremony: false, cocktail: false, feast: true, party: false },
];

const EITHER_PARTY_OR_FEAST_OR_COCKTAIL: ServiceCombination[] = [
    { ceremony: false, cocktail: true, feast: false, party: false },
    { ceremony: false, cocktail: false, feast: true, party: false },
    { ceremony: false, cocktail: false, feast: false, party: true },
];

export const SERVICES_COMBINATIONS = {
    ALL,
    ALL_EXCLUDING_PARTY,
    ONLY_CEREMONIES,
    CEREMONY_AND_COCKTAIL_OR_FEAST,
    ONLY_COCKTAIL_OR_FEAST,
    COCKTAIL_AND_FEAST,
    PARTY_AND_COCKTAIL_OR_FEAST,
    PARTY_AND_COCKTAIL,
    CEREMONY_AND_COCKTAIL,
    EITHER_CEREMONY_OR_FEAST_OR_COCKTAIL,
    EITHER_PARTY_OR_FEAST_OR_COCKTAIL,
    PARTY_AND_COCKTAIL_AND_FEAST,
    EITHER_CEREMONY_OR_COCKTAIL,
};
