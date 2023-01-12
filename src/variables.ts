import { Discount, Group } from './types';

export const noGroupLabel = '-- Sin música --';

export const x3ConcuerdaDiscount: Discount = {
    label: 'boda completa Trio Concuerda',
    percentage: 25,
};
export const x2ConcuerdaDiscount: Discount = {
    label: 'pack Trio Concuerda',
    percentage: 20,
};
export const x3SameGroupDiscount: Discount = {
    label: 'boda completa con el mismo grupo',
    percentage: 15,
};
export const x2SameGroupDiscount = {
    label: 'pack con el mismo grupo',
    percentage: 10,
};
export const x2DifferentGroupDiscount = {
    label: 'pack con diferentes grupos',
    percentage: 5,
};
export const x3DifferentGroupDiscount = {
    label: 'boda completa',
    percentage: 10,
};

export const candlesPrice = 400;

export const grandPianoPrice = 500;

export const candlesAndGrandPianoPrice = 700;

export const flowersPrice = 70;

export const feastSingerPrice = 500;
export const ceremonySingerPrice = 400;
export const cocktailSingerPrice = 450;

export const groups: Group[] = [
    {
        name: 'Piano',
        ceremonyPrice: 500,
        cocktailPrice: 700,
        feastPrice: 800,
        canUseGrandPiano: true,
        canAddSinger: false,
    },
    {
        name: 'Pop Dúo: Maryna & Guitarra',
        ceremonyPrice: 700,
        cocktailPrice: 900,
        feastPrice: 1100,
        canUseGrandPiano: false,
        canAddSinger: false,
    },
    {
        name: 'Soul Quintet: Elvira & Jazz Quartet',
        ceremonyPrice: 0,
        cocktailPrice: 2000,
        feastPrice: 2400,
        canUseGrandPiano: true,
        canAddSinger: false,
    },
    {
        name: 'Trio Concuerda',
        ceremonyPrice: 1100,
        cocktailPrice: 1650,
        feastPrice: 2000,
        canUseGrandPiano: false,
        canAddSinger: true,
    },
    {
        name: 'Trio Concuerda Infinity',
        ceremonyPrice: 0,
        cocktailPrice: 2100,
        feastPrice: 2500,
        canUseGrandPiano: false,
        canAddSinger: true,
    },
    {
        name: 'Latin Quartet',
        ceremonyPrice: 0,
        cocktailPrice: 1250,
        feastPrice: 1500,
        canUseGrandPiano: false,
        canAddSinger: false,
    },
    {
        name: '2Cellos',
        ceremonyPrice: 650,
        cocktailPrice: 850,
        feastPrice: 1050,
        canUseGrandPiano: false,
        canAddSinger: false,
    },
    {
        name: 'Jazz Quartet Vicente Macián',
        ceremonyPrice: 0,
        cocktailPrice: 1600,
        feastPrice: 1950,
        canUseGrandPiano: true,
        canAddSinger: false,
    },
    {
        name: 'Pop Dúo: Cantante & Piano',
        ceremonyPrice: 700,
        cocktailPrice: 900,
        feastPrice: 1100,
        canUseGrandPiano: true,
        canAddSinger: false,
    },
    {
        name: 'Camerata Concuerda',
        ceremonyPrice: 2000,
        cocktailPrice: 0,
        feastPrice: 0,
        canUseGrandPiano: false,
        canAddSinger: true,
    },
    {
        name: 'Coro Concuerda',
        ceremonyPrice: 1650,
        cocktailPrice: 0,
        feastPrice: 0,
        canUseGrandPiano: false,
        canAddSinger: false,
    },
    {
        name: 'Camerata & Coro',
        ceremonyPrice: 3300,
        cocktailPrice: 0,
        feastPrice: 0,
        canUseGrandPiano: false,
        canAddSinger: false,
    },
    {
        name: 'Dúo Instrumental',
        ceremonyPrice: 600,
        cocktailPrice: 800,
        feastPrice: 1000,
        canUseGrandPiano: true,
        canAddSinger: true,
    },
    {
        name: '80’s Romantic Trio',
        ceremonyPrice: 0,
        cocktailPrice: 1200,
        feastPrice: 1500,
        canUseGrandPiano: true,
        canAddSinger: true,
    },
    {
        name: 'Concuerda&Co',
        ceremonyPrice: 700,
        cocktailPrice: 1000,
        feastPrice: 1250,
        canUseGrandPiano: true,
        canAddSinger: true,
    },
    {
        name: 'Dúo Lírico: Soprano & Piano',
        ceremonyPrice: 650,
        cocktailPrice: 0,
        feastPrice: 0,
        canUseGrandPiano: true,
        canAddSinger: false,
    },
];
