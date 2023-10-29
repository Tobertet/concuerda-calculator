import {
    Checkbox,
    FormControlLabel,
    ToggleButton,
    ToggleButtonGroup,
} from '@mui/material';
import { FC, useMemo, useState } from 'react';
import { theme } from '../theme';
import { Selector } from './Selector';
import { useController, useForm } from 'react-hook-form';
import { Band, Service, Wedding } from '../domain/types';
import { SelectorMultiple } from './SelectorMultiple';
import { SOLOISTS } from '../domain/constants/soloists';

const labels: Record<Service, string> = {
    ceremony: 'Ceremonia',
    cocktail: 'Cocktail',
    feast: 'Banquete',
    party: 'Fiesta',
};

type FilterType = 'soloist' | 'band';

type Props = {
    name: Exclude<Service, 'party'>;
    bands: Band[];
    control: ReturnType<typeof useForm<Wedding>>['control'];
};

export const ServiceFormGroup: FC<Props> = ({ name, bands, control }) => {
    const { field } = useController({ name, control });
    const selectedBand = useMemo(
        () => bands.find((item) => item.name === field.value?.bandName),
        [field.value?.bandName, bands]
    );

    const [filterType, setFilterType] = useState<FilterType>('band');

    const bandsForSoloist = useMemo(
        () =>
            bands
                .filter((b) =>
                    b.availableSoloists.some(
                        (s) =>
                            s.name === field.value?.soloistName[0] &&
                            s.serviceCombinations.some(
                                (serviceCombination) =>
                                    serviceCombination[name] === true
                            )
                    )
                )
                .filter((b) => {
                    switch (name) {
                        case 'ceremony':
                            return b.ceremonyPrice !== undefined;
                        case 'cocktail':
                            return b.cocktailPrice !== undefined;
                        case 'feast':
                            return b.feastPrice !== undefined;
                        default:
                            return false;
                    }
                }),
        [bands, field.value?.soloistName, name]
    );

    return (
        <>
            {labels[name] && (
                <h4
                    style={{
                        color: '#fbf5e1',
                        textAlign: 'center',
                        marginTop: 0,
                        fontSize: '20px',
                        fontFamily: 'Abhaya Libre',
                    }}
                >
                    {labels[name]}
                </h4>
            )}
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <ToggleButtonGroup
                    color="primary"
                    value={filterType}
                    exclusive
                    onChange={(
                        event: React.MouseEvent<HTMLElement>,
                        newValue: FilterType | null
                    ) => {
                        if (newValue === null) {
                            return;
                        }
                        setFilterType(newValue);
                        field.onChange({
                            bandName: undefined,
                            soloistName: [],
                            withCandles: false,
                            withGrandPiano: false,
                            withFlowers: false,
                        });
                    }}
                >
                    <ToggleButton value="band">Grupo</ToggleButton>
                    <ToggleButton value="soloist">Solista</ToggleButton>
                </ToggleButtonGroup>
            </div>
            {filterType === 'band' && (
                <>
                    <Selector
                        onChange={(bandName) => {
                            if (!bandName) {
                                field.onChange({
                                    bandName: undefined,
                                    soloistName: [],
                                });
                                return;
                            }
                            const band = bands.find(
                                (item) => item.name === bandName
                            )!;
                            if (!band.canHaveGrandPiano) {
                                field.onChange({
                                    ...field.value,
                                    bandName,
                                    withGrandPiano: false,
                                    withFlowers: false,
                                    soloistName: [],
                                });
                            } else if (!band.availableSoloists.length) {
                                field.onChange({
                                    ...field.value,
                                    bandName,
                                    withSinger: false,
                                    soloistName: [],
                                });
                            } else {
                                field.onChange({
                                    ...field.value,
                                    bandName,
                                    soloistName: [],
                                });
                            }
                        }}
                        items={bands
                            .filter((b) => {
                                switch (name) {
                                    case 'ceremony':
                                        return b.ceremonyPrice !== undefined;
                                    case 'cocktail':
                                        return b.cocktailPrice !== undefined;
                                    case 'feast':
                                        return b.feastPrice !== undefined;
                                    default:
                                        return false;
                                }
                            })
                            .filter((b) =>
                                b.serviceCombinations.some(
                                    (serviceCombination) =>
                                        serviceCombination[name] === true
                                )
                            )
                            .map((band) => ({
                                label: band.name,
                                value: band.name,
                            }))}
                        value={field.value?.bandName}
                    />
                    {(selectedBand?.availableSoloists.length ?? 0) > 0 && (
                        <>
                            <h4
                                style={{
                                    color: '#fbf5e1',
                                    textAlign: 'left',
                                    marginTop: 8,
                                    marginBottom: 4,
                                    fontFamily: 'Abhaya Libre',
                                    padding: '0 10%',
                                    fontWeight: 400,
                                    fontSize: '1rem',
                                    lineHeight: 1.5,
                                }}
                            >
                                Solista
                            </h4>
                            <SelectorMultiple
                                onChange={(soloistName) => {
                                    if (!soloistName) {
                                        field.onChange({
                                            soloistName: undefined,
                                        });
                                        return;
                                    }
                                    field.onChange({
                                        ...field.value,
                                        soloistName,
                                    });
                                }}
                                items={
                                    selectedBand?.availableSoloists
                                        .filter((soloist) =>
                                            soloist.serviceCombinations.some(
                                                (serviceCombination) =>
                                                    serviceCombination[name] ===
                                                    true
                                            )
                                        )
                                        .map((soloist) => ({
                                            label: soloist.name,
                                            value: soloist.name,
                                        })) ?? []
                                }
                                value={field.value?.soloistName ?? []}
                            />
                        </>
                    )}
                </>
            )}
            {filterType === 'soloist' && (
                <>
                    <Selector
                        onChange={(name) => {
                            if (!name) {
                                field.onChange({
                                    bandName: undefined,
                                    soloistName: [],
                                });
                                return;
                            } else {
                                field.onChange({
                                    ...field.value,
                                    soloistName: [name],
                                    bandName: undefined,
                                });
                            }
                        }}
                        items={SOLOISTS.ALL.filter((item) => {
                            switch (name) {
                                case 'ceremony':
                                    return item.ceremonyPrice !== undefined;
                                case 'cocktail':
                                    return item.cocktailPrice !== undefined;
                                case 'feast':
                                    return item.feastPrice !== undefined;
                                default:
                                    return false;
                            }
                        })
                            .filter((item) =>
                                item.serviceCombinations.some(
                                    (serviceCombination) =>
                                        serviceCombination[name] === true
                                )
                            )
                            .map((item) => ({
                                label: item.name,
                                value: item.name,
                            }))}
                        value={field.value?.soloistName[0]}
                    />
                    {field.value?.soloistName[0] && (
                        <>
                            <h4
                                style={{
                                    color: '#fbf5e1',
                                    textAlign: 'left',
                                    marginTop: 8,
                                    marginBottom: 4,
                                    fontFamily: 'Abhaya Libre',
                                    padding: '0 10%',
                                    fontWeight: 400,
                                    fontSize: '1rem',
                                    lineHeight: 1.5,
                                }}
                            >
                                Grupo
                            </h4>
                            <Selector
                                onChange={(bandName) => {
                                    if (!bandName) {
                                        field.onChange({
                                            bandName: undefined,
                                            soloistName: [],
                                        });
                                        return;
                                    }
                                    const band = bands.find(
                                        (item) => item.name === bandName
                                    )!;
                                    if (!band.canHaveGrandPiano) {
                                        field.onChange({
                                            ...field.value,
                                            bandName,
                                            withGrandPiano: false,
                                            withFlowers: false,
                                        });
                                    } else if (!band.availableSoloists.length) {
                                        field.onChange({
                                            ...field.value,
                                            bandName,
                                            withSinger: false,
                                        });
                                    } else {
                                        field.onChange({
                                            ...field.value,
                                            bandName,
                                        });
                                    }
                                }}
                                items={bandsForSoloist.map((item) => ({
                                    label: item.name,
                                    value: item.name,
                                }))}
                                value={field.value?.bandName}
                            />
                        </>
                    )}
                </>
            )}

            <FormControlLabel
                control={
                    <Checkbox
                        disabled={!selectedBand?.canHaveCandles}
                        style={{ color: theme.palette.primary.main }}
                        checked={Boolean(field.value?.withCandles)}
                        onChange={(e) => {
                            field.onChange({
                                ...field.value,
                                withCandles: e.target.checked,
                            });
                        }}
                    />
                }
                label="Con velas"
                style={{ color: 'white', padding: '0 10%' }}
            />
            <FormControlLabel
                control={
                    <Checkbox
                        disabled={!selectedBand?.canHaveGrandPiano}
                        style={{ color: theme.palette.primary.main }}
                        checked={Boolean(field.value?.withGrandPiano)}
                        onChange={(e) => {
                            field.onChange({
                                ...field.value,
                                withGrandPiano: e.target.checked,
                                withFlowers: false,
                            });
                        }}
                    />
                }
                label="Con piano de cola"
                style={{ color: 'white', padding: '0 10%' }}
            />
            <FormControlLabel
                control={
                    <Checkbox
                        disabled={
                            !selectedBand?.canHaveGrandPiano ||
                            !field.value?.withGrandPiano
                        }
                        style={{
                            color: theme.palette.primary.main,
                        }}
                        checked={Boolean(field.value?.withFlowers)}
                        onChange={(e) => {
                            field.onChange({
                                ...field.value,
                                withFlowers: e.target.checked,
                            });
                        }}
                    />
                }
                label="Con flores en el piano de cola"
                style={{ color: 'white', padding: '0 10%' }}
            />
        </>
    );
};
