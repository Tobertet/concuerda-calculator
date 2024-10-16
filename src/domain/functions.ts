import { BANDS } from './constants/bands';
import {
    CANDLES_PRICE,
    DISCOUNTS,
    FLOWERS_PRICE,
    GRAND_PIANO_PRICE,
} from './constants/constants';
import { SOLOISTS } from './constants/soloists';
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
        wedding['pre-party']?.bandName,
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
        wedding.ceremony?.soloistName.filter(
            (item) => item === soloistName
        )?.[0],
        wedding.cocktail?.soloistName.filter(
            (item) => item === soloistName
        )?.[0],
        wedding.feast?.soloistName.filter((item) => item === soloistName)?.[0],
        wedding['pre-party']?.bandName,
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
    const band = BANDS.find((b) => b.name === bandName)!;
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
        case 'pre-party':
            return {
                label: band.name,
                price: band.partyPrice ?? 0,
                discountedPrice: getDiscountedPriceForBand(
                    bandName,
                    band.partyPrice ?? 0,
                    wedding
                ),
            };
        case 'party':
            const soloist = SOLOISTS.ALL.find((s) => s.name === bandName)!;
            return {
                label: soloist.name,
                price: soloist.partyPrice ?? 0,
                discountedPrice: getDiscountedPriceForSoloist(
                    bandName,
                    soloist.partyPrice ?? 0,
                    wedding
                ),
            };
    }
};

const getInvoiceLineForSoloist = (
    soloistName: string,
    service: Service,
    wedding: Wedding
) => {
    const soloist = SOLOISTS.ALL.find((s) => s.name === soloistName)!;
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
        case 'pre-party':
            return {
                label,
                price: soloist.partyPrice ?? 0,
                discountedPrice: getDiscountedPriceForSoloist(
                    soloistName,
                    soloist.partyPrice ?? 0,
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
            invoice['pre-party'],
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

const bandRequiresSoloist = (
    wedding: Wedding,
    bandName: string
): string | undefined => {
    const bandsWithoutSoloist = [
        wedding.ceremony,
        wedding.cocktail,
        wedding.feast,
        wedding['pre-party'],
    ].filter(
        (item) =>
            item !== undefined &&
            item.bandName === bandName &&
            item.soloistName.length === 0
    ) as Wedding['ceremony'][];

    if (bandsWithoutSoloist.length) {
        return `El grupo ${bandName} necesita un solista.`;
    }
};

const getInvoiceErrors = (wedding: Wedding): string[] => {
    let errors: string[] = [];

    // Check for grand piano errors
    const servicesWithGrandPiano = [
        wedding.ceremony?.withGrandPiano,
        wedding.cocktail?.withGrandPiano,
        wedding.feast?.withGrandPiano,
        wedding['pre-party']?.withGrandPiano,
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
        wedding['pre-party']?.withCandles,
        wedding.party?.withCandles,
    ].filter((item) => item === true) as boolean[];

    if (servicesWithCandles.length > 1) {
        errors = [
            ...errors,
            'No se puede contratar más de un servicio con velas.',
        ];
    }

    // Check if the selected band can do the selected service combinations
    const bandsServiceCombinations: (
        | {
              band: Band;
              serviceCombination?: ServiceCombination;
          }
        | undefined
    )[] = BANDS.map((band) => {
        if (
            [
                wedding.ceremony?.bandName,
                wedding.cocktail?.bandName,
                wedding.feast?.bandName,
                wedding['pre-party']?.bandName,
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
                (serviceCombination.party ===
                    (wedding['pre-party']?.bandName === band.name) ||
                    serviceCombination.party ===
                        (wedding.party?.bandName === band.name))
        );
        return { band, serviceCombination };
    }).filter((item) => item !== undefined) as {
        band: Band;
        serviceCombination?: ServiceCombination;
    }[];

    const bandsServiceCombinationsErrors = bandsServiceCombinations.filter(
        (item) => item?.serviceCombination === undefined
    );

    errors = [
        ...errors,
        ...bandsServiceCombinationsErrors.map((item) => {
            return `El grupo "${item?.band.name}" no puede hacer la combinación de servicios seleccionada.`;
        }),
    ];

    // Add an error if there is a soloist but no band
    const soloistsWithoutBand = [
        wedding.ceremony,
        wedding.cocktail,
        wedding.feast,
        wedding['pre-party'],
    ].filter(
        (item) =>
            item !== undefined &&
            item.bandName === undefined &&
            item.soloistName.length > 0
    ) as Wedding['ceremony'][];

    if (soloistsWithoutBand.length) {
        errors = [
            ...errors,
            'Es necesario seleccionar un grupo para el solista seleccionado.',
        ];
    }

    // Add error if band is Bossa Nova and soloist is not Sofia Bossa
    const bossaNovaBandWithoutSofiaBossa = [
        wedding.ceremony,
        wedding.cocktail,
        wedding.feast,
        wedding['pre-party'],
    ].filter(
        (item) =>
            item !== undefined &&
            item.bandName === 'Bossa Nova Band' &&
            item.soloistName.includes('Sofía Bossa') === false
    ) as Wedding['ceremony'][];

    if (bossaNovaBandWithoutSofiaBossa.length) {
        errors = [
            ...errors,
            'El grupo "Bossa Nova Band" necesita a "Sofía Bossa" como solista.',
        ];
    }

    // Add error if band is Crooner Band and soloist is not Dan Crooner
    const croonerBandWithoutDanCrooner = [
        wedding.ceremony,
        wedding.cocktail,
        wedding.feast,
        wedding['pre-party'],
    ].filter(
        (item) =>
            item !== undefined &&
            item.bandName === 'Crooner Band' &&
            item.soloistName.includes('Dan Crooner') === false
    ) as Wedding['ceremony'][];

    if (croonerBandWithoutDanCrooner.length) {
        errors = [
            ...errors,
            'El grupo "Crooner Band" necesita a "Dan Crooner" como solista.',
        ];
    }

    // Add error if band is Crooner Band and soloist is not Dan Crooner
    const duoFlamencoWithoutIvan = [
        wedding.ceremony,
        wedding.cocktail,
        wedding.feast,
        wedding['pre-party'],
    ].filter(
        (item) =>
            item !== undefined &&
            item.bandName === 'Dúo Flamenco' &&
            item.soloistName.includes('Iván Flamenco') === false
    ) as Wedding['ceremony'][];

    if (duoFlamencoWithoutIvan.length) {
        errors = [
            ...errors,
            'El grupo "Dúo Flamenco" necesita a "Iván Flamenco" como solista.',
        ];
    }

    // Add error if band is Crooner Band and soloist is not Dan Crooner
    const duoIndieWithoutAlvaro = [
        wedding.ceremony,
        wedding.cocktail,
        wedding.feast,
        wedding['pre-party'],
    ].filter(
        (item) =>
            item !== undefined &&
            item.bandName === 'Dúo Indie' &&
            item.soloistName.includes('Álvaro Indie') === false
    ) as Wedding['ceremony'][];

    if (duoIndieWithoutAlvaro.length) {
        errors = [
            ...errors,
            'El grupo "Dúo Indie" necesita a "Álvaro Indie" como solista.',
        ];
    }

    // Add error if band is Crooner Band and soloist is not Dan Crooner
    const latinQuartetWithoutRaul = [
        wedding.ceremony,
        wedding.cocktail,
        wedding.feast,
        wedding['pre-party'],
    ].filter(
        (item) =>
            item !== undefined &&
            item.bandName === 'Latin Quartet' &&
            item.soloistName.includes('Raúl Latin') === false
    ) as Wedding['ceremony'][];

    if (latinQuartetWithoutRaul.length) {
        errors = [
            ...errors,
            'El grupo "Latin Quartet" necesita a "Raúl Latin" como solista.',
        ];
    }

    const errorsForBandsWithoutSoloist = [
        bandRequiresSoloist(wedding, 'Dúo Saxo & Piano'),
        bandRequiresSoloist(wedding, 'Dúo Cantante & Piano'),
        bandRequiresSoloist(wedding, 'Dúo Cantante & Piano & Guitarra'),
        bandRequiresSoloist(wedding, 'Dúo Cantante & Guitarra'),
        bandRequiresSoloist(wedding, 'String Band'),
        bandRequiresSoloist(wedding, 'Pop Band'),
        bandRequiresSoloist(wedding, 'Rock Band'),
        bandRequiresSoloist(wedding, 'Funky Band'),
        bandRequiresSoloist(wedding, 'Gipsy Band'),
        bandRequiresSoloist(wedding, 'Jazz Quartet'),
        bandRequiresSoloist(wedding, 'Saxo Lounge'),
    ].filter((item) => !!item) as string[];

    errors = [...errors, ...errorsForBandsWithoutSoloist];

    return errors;
};

export const calculateInvoice: (wedding: Wedding) => Invoice = (
    wedding: Wedding
) => {
    const emptyInvoice: Invoice = {
        ceremony: undefined,
        cocktail: undefined,
        feast: undefined,
        'pre-party': undefined,
        party: undefined,
        total: { label: 'Total', price: 0, discountedPrice: 0 },
        errors: [],
    };

    console.log(wedding);

    let invoice: Invoice = emptyInvoice;

    (
        ['ceremony', 'cocktail', 'feast', 'pre-party', 'party'] as Exclude<
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
            if (weddingService.soloistName?.length) {
                invoice[service] = [
                    ...invoice[service]!,
                    ...([...weddingService.soloistName]
                        .map((soloistName) =>
                            getInvoiceLineForSoloist(
                                soloistName,
                                service,
                                wedding
                            )
                        )
                        .filter((item) => item !== undefined) as InvoiceItem[]),
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

    console.log(invoice);

    return invoice;
};
