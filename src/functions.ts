import { EventFormData, Group } from './types';
import {
    candlesAndGrandPianoPrice,
    candlesPrice,
    ceremonySingerPrice,
    cocktailSingerPrice,
    feastSingerPrice,
    flowersPrice,
    grandPianoPrice,
    x2ConcuerdaDiscount,
    x2DifferentGroupDiscount,
    x2SameGroupDiscount,
    x3ConcuerdaDiscount,
    x3DifferentGroupDiscount,
    x3SameGroupDiscount,
} from './variables';

export const getPrice = (
    priceField: 'ceremonyPrice' | 'cocktailPrice' | 'feastPrice',
    eventData: EventFormData
): number => {
    if (!eventData.group) {
        return 0;
    }
    let price = eventData.group[priceField];

    if (eventData.withCandles && eventData.withGrandPiano) {
        price += candlesAndGrandPianoPrice;
    } else if (eventData.withCandles) {
        price += candlesPrice;
    } else if (eventData.withSinger) {
        if (priceField === 'ceremonyPrice') {
            price += ceremonySingerPrice;
        } else if (priceField === 'cocktailPrice') {
            price += cocktailSingerPrice;
        } else if (priceField === 'feastPrice') {
            price += feastSingerPrice;
        }
    } else if (eventData.withGrandPiano) {
        price += grandPianoPrice;
    }

    if (eventData.withFlowers) {
        price += flowersPrice;
    }

    return price;
};

export const getDiscount = (
    ceremonyGroup: Group | undefined,
    cocktailGroup: Group | undefined,
    feastGroup: Group | undefined
) => {
    if (
        ceremonyGroup &&
        cocktailGroup &&
        feastGroup &&
        (ceremonyGroup === cocktailGroup ||
            ceremonyGroup === feastGroup ||
            cocktailGroup === feastGroup)
    )
        return ['Trio Concuerda', 'Trio Concuerda Infinity'].includes(
            ceremonyGroup.name
        ) ||
            ['Trio Concuerda', 'Trio Concuerda Infinity'].includes(
                cocktailGroup.name
            )
            ? x3ConcuerdaDiscount
            : x3SameGroupDiscount;

    if (ceremonyGroup && cocktailGroup && feastGroup)
        return x3DifferentGroupDiscount;

    if (ceremonyGroup && cocktailGroup && ceremonyGroup === cocktailGroup)
        return ['Trio Concuerda', 'Trio Concuerda Infinity'].includes(
            ceremonyGroup.name
        )
            ? x2ConcuerdaDiscount
            : x2SameGroupDiscount;

    if (cocktailGroup && feastGroup && cocktailGroup === feastGroup)
        return ['Trio Concuerda', 'Trio Concuerda Infinity'].includes(
            cocktailGroup.name
        )
            ? x2ConcuerdaDiscount
            : x2SameGroupDiscount;

    if (ceremonyGroup && feastGroup && ceremonyGroup === feastGroup)
        return ['Trio Concuerda', 'Trio Concuerda Infinity'].includes(
            ceremonyGroup.name
        )
            ? x2ConcuerdaDiscount
            : x2SameGroupDiscount;

    if (ceremonyGroup && cocktailGroup)
        return ['Trio Concuerda', 'Trio Concuerda Infinity'].includes(
            ceremonyGroup.name
        ) &&
            ['Trio Concuerda', 'Trio Concuerda Infinity'].includes(
                cocktailGroup.name
            )
            ? x2ConcuerdaDiscount
            : x2DifferentGroupDiscount;
    if (ceremonyGroup && feastGroup)
        return ['Trio Concuerda', 'Trio Concuerda Infinity'].includes(
            ceremonyGroup.name
        ) &&
            ['Trio Concuerda', 'Trio Concuerda Infinity'].includes(
                feastGroup.name
            )
            ? x2ConcuerdaDiscount
            : x2DifferentGroupDiscount;
    if (cocktailGroup && feastGroup)
        return ['Trio Concuerda', 'Trio Concuerda Infinity'].includes(
            feastGroup.name
        ) &&
            ['Trio Concuerda', 'Trio Concuerda Infinity'].includes(
                cocktailGroup.name
            )
            ? x2ConcuerdaDiscount
            : x2DifferentGroupDiscount;
};
