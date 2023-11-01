import { Service } from '../types';

export const CANDLES_PRICE = 600;
export const GRAND_PIANO_PRICE = 800;
export const CANDLES_AND_GRAND_PIANO_PRICE = 1200;
export const FLOWERS_PRICE = 300;

export const DISCOUNTS = {
    DISCOUNT_TRIO_CONCUERDA_3_SERVICES: 0.75,
    DISCOUNT_TRIO_CONCUERDA_2_SERVICES: 0.8,
    DISCOUNT_SAME_GROUP_3_SERVICES: 0.85,
    DISCOUNT_SAME_GROUP_2_SERVICES: 0.9,
    DISCOUNT_DIFFERENT_GROUP_2_SERVICES: 0.95,
    DISCOUNT_SAME_SOLOIST_3_SERVICES: 0.75,
    DISCOUNT_SAME_SOLOIST_2_SERVICES: 0.8,
};

export const NO_GROUP_LABEL = '-- Sin música --';

export const SERVICE_LABELS: Record<Service, string> = {
    ceremony: 'Ceremonia',
    cocktail: 'Cocktail',
    feast: 'Banquete',
    'pre-party': 'Pre-Fiesta',
    party: 'Fiesta',
};
