import { Checkbox, FormControlLabel } from '@mui/material';
import { FC, useMemo } from 'react';
import { theme } from '../theme';
import { Selector } from './Selector';
import { useController, useForm } from 'react-hook-form';
import { Band, Service, Wedding } from '../domain/types';

const labels: Record<Service, string> = {
    ceremony: 'Ceremonia',
    cocktail: 'Cocktail',
    feast: 'Banquete',
    party: 'Fiesta',
};

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

    return (
        <>
            <Selector
                label={labels[name]}
                onChange={(bandName) => {
                    if (!bandName) {
                        field.onChange({
                            bandName: undefined,
                            soloistName: undefined,
                        });
                        return;
                    }
                    const band = bands.find((item) => item.name === bandName)!;
                    if (!band.canHaveGrandPiano) {
                        field.onChange({
                            ...field.value,
                            bandName,
                            withGrandPiano: false,
                            withFlowers: false,
                            soloistName: undefined,
                        });
                    } else if (!band.availableSoloists.length) {
                        field.onChange({
                            ...field.value,
                            bandName,
                            withSinger: false,
                            soloistName: undefined,
                        });
                    } else {
                        field.onChange({
                            ...field.value,
                            bandName,
                            soloistName: undefined,
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
                    <Selector
                        onChange={(soloistName) => {
                            if (!soloistName) {
                                field.onChange({ soloistName: undefined });
                                return;
                            }
                            field.onChange({ ...field.value, soloistName });
                        }}
                        items={
                            selectedBand?.availableSoloists
                                .filter((soloist) =>
                                    soloist.serviceCombinations.some(
                                        (serviceCombination) =>
                                            serviceCombination[name] === true
                                    )
                                )
                                .map((soloist) => ({
                                    label: soloist.name,
                                    value: soloist.name,
                                })) ?? []
                        }
                        value={field.value?.soloistName}
                    />
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
