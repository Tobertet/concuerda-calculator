import { Discount, Group } from "./types";

export const noGroupLabel = "-- Sin música --";

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

export const groups: Group[] = [
    {
        name: 'Camerata Concuerda',
        ceremonyPrice: 2880,
        cocktailPrice: 0,
        feastPrice: 0
    }, {
        name: 'Coro Concuerda',
        ceremonyPrice: 2580,
        cocktailPrice: 0,
        feastPrice: 0
    }, {
        name: 'Camerata & Coro',
        ceremonyPrice: 3860,
        cocktailPrice: 0,
        feastPrice: 0
    }, {
        name: 'Pop Dúo: Maryna & Guitarra',
        ceremonyPrice: 0,
        cocktailPrice: 1900,
        feastPrice: 2400
    }, {
        name: 'Pop Dúo: Cantante & Piano',
        ceremonyPrice: 0,
        cocktailPrice: 1900,
        feastPrice: 2400
    }, {
        name: 'Pop Dúo: Cantante & Piano Cola',
        ceremonyPrice: 0,
        cocktailPrice: 2300,
        feastPrice: 2800
    }, {
        name: 'Latin Quartet',
        ceremonyPrice: 2100,
        cocktailPrice: 2500,
        feastPrice: 0
    }, {
        name: 'Jazz Quartet Vicente Macián',
        ceremonyPrice: 0,
        cocktailPrice: 2400,
        feastPrice: 2800
    }, {
        name: 'Jazz Quartet Vicente Macián Piano de Cola',
        ceremonyPrice: 0,
        cocktailPrice: 2800,
        feastPrice: 3200
    }, {
        name: '2 Cellos',
        ceremonyPrice: 1500,
        cocktailPrice: 1800,
        feastPrice: 0
    }, {
        name: 'Dúo Instrumental',
        ceremonyPrice: 1450,
        cocktailPrice: 1750,
        feastPrice: 0
    }, {
        name: 'Dúo Instrumental Piano de Cola',
        ceremonyPrice: 1850,
        cocktailPrice: 2150,
        feastPrice: 0
    }, {
        name: 'Concuerda&Co',
        ceremonyPrice: 1300,
        cocktailPrice: 1600,
        feastPrice: 1850
    }, {
        name: 'Trio Concuerda',
        ceremonyPrice: 1800,
        cocktailPrice: 2400,
        feastPrice: 3000
    }, {
        name: 'Trio Concuerda Infinity',
        ceremonyPrice: 0,
        cocktailPrice: 0,
        feastPrice: 0
    }, {
        name: 'Piano',
        ceremonyPrice: 1200,
        cocktailPrice: 1500,
        feastPrice: 1700
    }, {
        name: 'Piano de Cola',
        ceremonyPrice: 1650,
        cocktailPrice: 1950,
        feastPrice: 2150
    }, {
        name: 'Soul Quintet: Elvira & Jazz Quartet',
        ceremonyPrice: 0,
        cocktailPrice: 2900,
        feastPrice: 3300
    }, {
        name: 'Soul Quintet: Elvira & Jazz Quartet Piano de Cola',
        ceremonyPrice: 0,
        cocktailPrice: 2800,
        feastPrice: 3200
    }, {
        name: 'Dúo Lírico: Soprano & Piano',
        ceremonyPrice: 1300,
        cocktailPrice: 0,
        feastPrice: 0
    }, {
        name: 'Dúo Lírico: Soprano & Piano de Cola',
        ceremonyPrice: 1700,
        cocktailPrice: 0,
        feastPrice: 0
    }, {
        name: '80’s Romantic Trio',
        ceremonyPrice: 2100,
        cocktailPrice: 2500,
        feastPrice: 0
    }, {
        name: '80’s Romantic Trio Piano de Cola',
        ceremonyPrice: 2500,
        cocktailPrice: 2900,
        feastPrice: 0
    },
]
