import { BANDS_WITH_10_PERCENT_MORE } from './constants/bands';
import {
    CANDLES_PRICE,
    DISCOUNTS,
    FLOWERS_PRICE,
    GRAND_PIANO_PRICE,
} from './constants/constants';
import { SOLOISTS_WITH_10_PERCENT_MORE } from './constants/soloists';
import {
    Band,
    Invoice,
    InvoiceItem,
    Service,
    ServiceCombination,
    Wedding,
} from './types';

const getDiscountedPriceForBand = (
    bandName: string,
    price: number,
    wedding: Wedding
): number | undefined => {
    const services = [
        wedding.ceremony?.bandName,
        wedding.cocktail?.bandName,
        wedding.feast?.bandName,
        wedding.party?.bandName,
    ].filter((item) => item !== undefined) as string[];

    const totalServices = services.length;

    const totalAppearances = services.filter(
        (item) => item === bandName
    ).length;

    if (bandName === 'Trio Concuerda') {
        if (totalAppearances >= 3) {
            return price * DISCOUNTS.DISCOUNT_TRIO_CONCUERDA_3_SERVICES;
        }
        if (totalAppearances === 2) {
            return price * DISCOUNTS.DISCOUNT_TRIO_CONCUERDA_2_SERVICES;
        }
    }

    if (totalAppearances >= 3) {
        return price * DISCOUNTS.DISCOUNT_SAME_GROUP_3_SERVICES;
    }
    if (totalAppearances === 2) {
        return price * DISCOUNTS.DISCOUNT_SAME_GROUP_2_SERVICES;
    }
    if (totalServices > 1) {
        return price * DISCOUNTS.DISCOUNT_DIFFERENT_GROUP_2_SERVICES;
    }
    return undefined;
};

const getDiscountedPriceForSoloist = (
    soloistName: string,
    price: number,
    wedding: Wedding
): number | undefined => {
    const services = [
        wedding.ceremony?.soloistName,
        wedding.cocktail?.soloistName,
        wedding.feast?.soloistName,
        wedding.party?.bandName,
    ].filter((item) => item !== undefined) as string[];

    const totalAppearances = services.filter(
        (item) => item === soloistName
    ).length;

    if (totalAppearances >= 3) {
        return price * DISCOUNTS.DISCOUNT_SAME_SOLOIST_3_SERVICES;
    }
    if (totalAppearances === 2) {
        return price * DISCOUNTS.DISCOUNT_SAME_SOLOIST_2_SERVICES;
    }
    return undefined;
};

const getInvoiceLineForBand = (
    bandName: string,
    service: Service,
    wedding: Wedding
): InvoiceItem => {
    const band = BANDS_WITH_10_PERCENT_MORE.find((b) => b.name === bandName)!;
    switch (service) {
        case 'ceremony':
            return {
                label: band.name,
                price: band.ceremonyPrice ?? 0,
                discountedPrice: getDiscountedPriceForBand(
                    bandName,
                    band.ceremonyPrice ?? 0,
                    wedding
                ),
            };
        case 'cocktail':
            return {
                label: band.name,
                price: band.cocktailPrice ?? 0,
                discountedPrice: getDiscountedPriceForBand(
                    bandName,
                    band.cocktailPrice ?? 0,
                    wedding
                ),
            };
        case 'feast':
            return {
                label: band.name,
                price: band.feastPrice ?? 0,
                discountedPrice: getDiscountedPriceForBand(
                    bandName,
                    band.feastPrice ?? 0,
                    wedding
                ),
            };
        case 'party':
            if (band === undefined) {
                const soloist = SOLOISTS_WITH_10_PERCENT_MORE.find(
                    (s) => s.name === bandName
                )!;
                return {
                    label: soloist.name,
                    price: soloist.partyPrice ?? 0,
                    discountedPrice: getDiscountedPriceForSoloist(
                        bandName,
                        soloist.partyPrice ?? 0,
                        wedding
                    ),
                };
            } else {
                return {
                    label: band.name,
                    price: band.partyPrice ?? 0,
                    discountedPrice: getDiscountedPriceForBand(
                        bandName,
                        band.partyPrice ?? 0,
                        wedding
                    ),
                };
            }
    }
};

const getInvoiceLineForSoloist = (
    soloistName: string,
    service: Service,
    wedding: Wedding
) => {
    const soloist = SOLOISTS_WITH_10_PERCENT_MORE.find(
        (s) => s.name === soloistName
    )!;
    const label = `con ${soloist.name}`;
    switch (service) {
        case 'ceremony':
            return {
                label,
                price: soloist.ceremonyPrice ?? 0,
                discountedPrice: getDiscountedPriceForSoloist(
                    soloistName,
                    soloist.ceremonyPrice ?? 0,
                    wedding
                ),
            };
        case 'cocktail':
            return {
                label,
                price: soloist.cocktailPrice ?? 0,
                discountedPrice: getDiscountedPriceForSoloist(
                    soloistName,
                    soloist.cocktailPrice ?? 0,
                    wedding
                ),
            };
        case 'feast':
            return {
                label,
                price: soloist.feastPrice ?? 0,
                discountedPrice: getDiscountedPriceForSoloist(
                    soloistName,
                    soloist.feastPrice ?? 0,
                    wedding
                ),
            };
        case 'party':
            return {
                label,
                price: soloist.partyPrice ?? 0,
                discountedPrice: getDiscountedPriceForSoloist(
                    soloistName,
                    soloist.partyPrice ?? 0,
                    wedding
                ),
            };
    }
};

const getInvoiceLineForCandles = (serviceConfiguration: {
    withGrandPiano: boolean;
}) => {
    if (serviceConfiguration.withGrandPiano) {
        return {
            label: 'velas',
            discountedPrice: CANDLES_PRICE - 100,
            price: CANDLES_PRICE,
        };
    }
    return {
        label: 'velas',
        price: CANDLES_PRICE,
    };
};

const getInvoiceLineForGrandPiano = (serviceConfiguration: {
    withCandles: boolean;
}): InvoiceItem => {
    if (serviceConfiguration.withCandles) {
        return {
            label: 'piano de cola',
            discountedPrice: GRAND_PIANO_PRICE - 100,
            price: GRAND_PIANO_PRICE,
        };
    }
    return {
        label: 'piano de cola',
        price: GRAND_PIANO_PRICE,
    };
};

const getInvoiceLineForFlowers = (): InvoiceItem => {
    return {
        label: 'flores',
        price: FLOWERS_PRICE,
    };
};

const getTotalPrice = (invoice: Invoice): number => {
    return (
        [
            invoice.ceremony,
            invoice.cocktail,
            invoice.feast,
            invoice.party,
        ].filter((item) => item !== undefined) as InvoiceItem[][]
    ).reduce(
        (acc, item) =>
            acc +
            item.reduce(
                (acc, item) => acc + (item.discountedPrice ?? item.price),
                0
            ),
        0
    );
};

const getInvoiceErrors = (wedding: Wedding): string[] => {
    let errors: string[] = [];

    // Check for grand piano errors
    const servicesWithGrandPiano = [
        wedding.ceremony?.withGrandPiano,
        wedding.cocktail?.withGrandPiano,
        wedding.feast?.withGrandPiano,
        wedding.party?.withGrandPiano,
    ].filter((item) => item === true) as boolean[];

    if (servicesWithGrandPiano.length > 1) {
        errors = [
            ...errors,
            'No se puede contratar más de un servicio con piano de cola.',
        ];
    }

    // Check for candles errors
    const servicesWithCandles = [
        wedding.ceremony?.withCandles,
        wedding.cocktail?.withCandles,
        wedding.feast?.withCandles,
        wedding.party?.withCandles,
    ].filter((item) => item === true) as boolean[];

    if (servicesWithCandles.length > 1) {
        errors = [
            ...errors,
            'No se puede contratar más de un servicio con velas.',
        ];
    }

    // If the service bandName is 'Cantante & Guitarra', the soloistName must be defined
    const guitaristWithoutRequiredSoloist = [
        wedding.ceremony,
        wedding.cocktail,
        wedding.feast,
    ].filter(
        (item) =>
            item !== undefined &&
            item.bandName === 'Cantante & Guitarra' &&
            item.soloistName === undefined
    ) as Wedding['ceremony'][];

    if (guitaristWithoutRequiredSoloist.length) {
        errors = [
            ...errors,
            'El grupo "Cantante & Guitarra" requiere un solista.',
        ];
    }

    // If the service bandName is 'Cantante & Piano', the soloistName must be defined
    const pianistWithoutRequiredSoloist = [
        wedding.ceremony,
        wedding.cocktail,
        wedding.feast,
    ].filter(
        (item) =>
            item !== undefined &&
            item.bandName === 'Cantante & Piano' &&
            item.soloistName === undefined
    ) as Wedding['ceremony'][];

    if (pianistWithoutRequiredSoloist.length) {
        errors = [
            ...errors,
            'El grupo "Cantante & Piano" requiere un solista.',
        ];
    }

    // If the service bandName is 'Cantante & Piano', the soloistName must be defined
    const pianistAndGuitaristWithoutRequiredSoloist = [
        wedding.ceremony,
        wedding.cocktail,
        wedding.feast,
    ].filter(
        (item) =>
            item !== undefined &&
            item.bandName === 'Cantante, Guitarra & Piano' &&
            item.soloistName === undefined
    ) as Wedding['ceremony'][];

    if (pianistAndGuitaristWithoutRequiredSoloist.length) {
        errors = [
            ...errors,
            'El grupo "Cantante, Guitarra & Piano" requiere un solista.',
        ];
    }

    const popBandWithoutRequiredSoloist = [
        wedding.ceremony,
        wedding.cocktail,
        wedding.feast,
    ].filter(
        (item) =>
            item !== undefined &&
            item.bandName === 'Pop Band' &&
            item.soloistName === undefined
    ) as Wedding['ceremony'][];

    if (popBandWithoutRequiredSoloist.length) {
        errors = [
            ...errors,
            'El grupo "Cantante, Guitarra & Piano" requiere un solista.',
        ];
    }

    // Check if the selected band can do the selected service combinations
    const bandsServiceCombinations: (
        | {
              band: Band;
              serviceCombination?: ServiceCombination;
          }
        | undefined
    )[] = BANDS_WITH_10_PERCENT_MORE.map((band) => {
        if (
            [
                wedding.ceremony?.bandName,
                wedding.cocktail?.bandName,
                wedding.feast?.bandName,
                wedding.party?.bandName,
            ].includes(band.name) === false
        ) {
            return undefined;
        }

        const serviceCombination = band.serviceCombinations.find(
            (serviceCombination) =>
                serviceCombination.ceremony ===
                    (wedding.ceremony?.bandName === band.name) &&
                serviceCombination.cocktail ===
                    (wedding.cocktail?.bandName === band.name) &&
                serviceCombination.feast ===
                    (wedding.feast?.bandName === band.name) &&
                serviceCombination.party ===
                    (wedding.party?.bandName === band.name)
        );
        return { band, serviceCombination };
    }).filter((item) => item !== undefined) as {
        band: Band;
        serviceCombination?: ServiceCombination;
    }[];

    console.log(bandsServiceCombinations);

    const bandsServiceCombinationsErrors = bandsServiceCombinations.filter(
        (item) => item?.serviceCombination === undefined
    );

    errors = [
        ...errors,
        ...bandsServiceCombinationsErrors.map((item) => {
            return `El grupo "${item?.band.name}" no puede hacer la combinación de servicios seleccionada.`;
        }),
    ];

    return errors;
};

export const calculateInvoice: (wedding: Wedding) => Invoice = (
    wedding: Wedding
) => {
    const emptyInvoice: Invoice = {
        ceremony: undefined,
        cocktail: undefined,
        feast: undefined,
        party: undefined,
        total: { label: 'Total', price: 0, discountedPrice: 0 },
        errors: [],
    };

    let invoice: Invoice = emptyInvoice;

    (
        ['ceremony', 'cocktail', 'feast', 'party'] as Exclude<
            Service,
            'party'
        >[]
    ).forEach((service) => {
        const weddingService = wedding[service];
        if (weddingService?.bandName) {
            invoice[service] = [
                getInvoiceLineForBand(
                    weddingService.bandName,
                    service,
                    wedding
                ),
            ];
            if (weddingService.soloistName) {
                invoice[service] = [
                    ...invoice[service]!,
                    getInvoiceLineForSoloist(
                        weddingService.soloistName!,
                        service,
                        wedding
                    ),
                ];
            }
            if (weddingService?.withCandles) {
                invoice[service] = [
                    ...invoice[service]!,
                    getInvoiceLineForCandles(weddingService),
                ];
            }
            if (weddingService.withGrandPiano) {
                invoice[service] = [
                    ...invoice[service]!,
                    getInvoiceLineForGrandPiano(weddingService),
                ];
            }
            if (weddingService.withFlowers) {
                invoice[service] = [
                    ...invoice[service]!,
                    getInvoiceLineForFlowers(),
                ];
            }
        }
    });

    invoice.total = {
        label: 'Total',
        price: getTotalPrice(invoice),
        discountedPrice: getTotalPrice(invoice) * 0.9,
    };

    invoice.errors = getInvoiceErrors(wedding);

    return invoice;
};
