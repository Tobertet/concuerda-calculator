export type SoloistInstrument = 'voice' | 'saxo';

export type Service = 'ceremony' | 'cocktail' | 'feast' | 'pre-party' | 'party';

export type ServiceCombination = {
    [key in Exclude<Service, 'pre-party'>]: boolean | undefined;
};

export type Band = {
    name: string;
    ceremonyPrice: number | undefined;
    cocktailPrice: number | undefined;
    feastPrice: number | undefined;
    partyPrice: number | undefined;
    serviceCombinations: ServiceCombination[];
    canHaveCandles: boolean;
    canHaveGrandPiano: boolean;
    availableSoloists: Soloist[];
};

type SoloistCategory = 'A' | 'B' | 'C';

export type SoloistCategoryPrices = {
    [key in SoloistCategory]: {
        ceremonyPrice: number;
        cocktailPrice: number;
        feastPrice: number;
        partyPrice: number;
    };
};

export type Soloist = {
    name: string;
    ceremonyPrice: number | undefined;
    cocktailPrice: number | undefined;
    feastPrice: number | undefined;
    partyPrice: number | undefined;
    serviceCombinations: ServiceCombination[];
    instrument: SoloistInstrument;
};

export type Wedding = {
    [key in Service]:
        | {
              bandName: string;
              soloistName: string[];
              withCandles: boolean;
              withGrandPiano: boolean;
              withFlowers: boolean;
          }
        | undefined;
};

export type InvoiceItem = {
    label: string;
    price: number;
    discountedPrice?: number;
};

export type Invoice = {
    [key in Service]: InvoiceItem[] | undefined;
} & {
    total: InvoiceItem;
    errors: string[];
};
