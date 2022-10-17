import { Group } from "./types";
import { x2DifferentGroupDiscount, x2SameGroupDiscount, x3DifferentGroupDiscount, x3SameGroupDiscount } from "./variables";

export const getPrice = (
    priceField: "ceremonyPrice" | "cocktailPrice" | "feastPrice",
    group: Group | undefined
): number => (group ? group[priceField] : 0);

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
        return x3SameGroupDiscount;

    if (ceremonyGroup && cocktailGroup && feastGroup)
        return x3DifferentGroupDiscount;

    if (ceremonyGroup && cocktailGroup && ceremonyGroup === cocktailGroup)
        return x2SameGroupDiscount;

    if (cocktailGroup && feastGroup && cocktailGroup === feastGroup)
        return x2SameGroupDiscount;

    if (ceremonyGroup && feastGroup && ceremonyGroup === feastGroup)
        return x2SameGroupDiscount;

    if (ceremonyGroup && cocktailGroup) return x2DifferentGroupDiscount;
    if (ceremonyGroup && feastGroup) return x2DifferentGroupDiscount;
    if (cocktailGroup && feastGroup) return x2DifferentGroupDiscount;
};