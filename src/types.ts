export type Group = {
    name: string;
    ceremonyPrice: number;
    cocktailPrice: number;
    feastPrice: number;
    canUseGrandPiano: boolean;
    canAddSinger: boolean;
};

export type Discount = {
    label: string;
    percentage: number;
};

export type EventFormData = {
    group: Group | undefined;
    withCandles: boolean;
    withGrandPiano: boolean;
    withFlowers: boolean;
    withSinger: boolean;
};
