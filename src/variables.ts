import { Discount, Group } from "./types";

export const noGroupLabel = "-- Sin música --";

export const x3ConcuerdaDiscount: Discount = {
    label: "ceremonia completa Concuerda",
    percentage: 25,
};
export const x2ConcuerdaDiscount: Discount = {
    label: "pack Concuerda",
    percentage: 20,
};
export const x3SameGroupDiscount: Discount = {
    label: "ceremonia completa con el mismo grupo",
    percentage: 15,
};
export const x2SameGroupDiscount = {
    label: "pack de 2 con el mismo grupo",
    percentage: 10,
};
export const x2DifferentGroupDiscount = {
    label: "pack de 2",
    percentage: 5,
};
export const x3DifferentGroupDiscount = {
    label: "ceremonia completa",
    percentage: 10,
};

export const candlesPrice = 600;

export const grandPianoPrice = 600;

export const candlesAndGrandPianoPrice = 1000;

export const flowersPrice = 300;


export const groups: Group[] = [
    {
        name: 'Piano',
        ceremonyPrice: 600,
        cocktailPrice: 900,
        feastPrice: 1100,
        canUseGrandPiano: true
    }, {
        name: 'Pop Dúo: Maryna & Guitarra',
        ceremonyPrice: 900,
        cocktailPrice: 1300,
        feastPrice: 1800,
        canUseGrandPiano: false
    }, {
        name: 'Soul Quintet: Elvira & Jazz Quartet',
        ceremonyPrice: 0,
        cocktailPrice: 2300,
        feastPrice: 2700,
        canUseGrandPiano: true
    }, {
        name: 'Trio Concuerda',
        ceremonyPrice: 1200,
        cocktailPrice: 1800,
        feastPrice: 2400,
        canUseGrandPiano: false
    }, {
        name: 'Trio Concuerda Infinity',
        ceremonyPrice: 0,
        cocktailPrice: 2400,
        feastPrice: 2850,
        canUseGrandPiano: false
    }, {
        name: 'Latin Quartet',
        ceremonyPrice: 0,
        cocktailPrice: 1500,
        feastPrice: 1900,
        canUseGrandPiano: false
    }, {
        name: '2Cellos',
        ceremonyPrice: 900,
        cocktailPrice: 1200,
        feastPrice: 1500,
        canUseGrandPiano: false
    }, {
        name: 'Jazz Quartet Vicente Macián',
        ceremonyPrice: 0,
        cocktailPrice: 1800,
        feastPrice: 2200,
        canUseGrandPiano: true
    }, {
        name: 'Pop Dúo: Cantante & Piano',
        ceremonyPrice: 900,
        cocktailPrice: 1300,
        feastPrice: 1800,
        canUseGrandPiano: true
    }, {
        name: 'Camerata Concuerda',
        ceremonyPrice: 2280,
        cocktailPrice: 0,
        feastPrice: 0,
        canUseGrandPiano: false
    }, {
        name: 'Coro Concuerda',
        ceremonyPrice: 1980,
        cocktailPrice: 0,
        feastPrice: 0,
        canUseGrandPiano: false
    }, {
        name: 'Camerata & Coro',
        ceremonyPrice: 3260,
        cocktailPrice: 0,
        feastPrice: 0,
        canUseGrandPiano: false
    }, {
        name: 'Dúo Instrumental',
        ceremonyPrice: 850,
        cocktailPrice: 1150,
        feastPrice: 1450,
        canUseGrandPiano: true
    }, {
        name: '80’s Romantic Trio',
        ceremonyPrice: 0,
        cocktailPrice: 1500,
        feastPrice: 1900,
        canUseGrandPiano: true
    }, {
        name: 'Concuerda&Co',
        ceremonyPrice: 700,
        cocktailPrice: 1000,
        feastPrice: 1250,
        canUseGrandPiano: true
    }, {
        name: 'Dúo Lírico: Soprano & Piano',
        ceremonyPrice: 700,
        cocktailPrice: 0,
        feastPrice: 0,
        canUseGrandPiano: true
    },
]
