import { Checkbox, FormControlLabel } from '@mui/material';
import { FC } from 'react';
import { theme } from '../theme';
import { Selector } from './Selector';
import { useController, useForm } from 'react-hook-form';
import { Band, Service, Soloist, Wedding } from '../domain/types';

const labels: Record<Service, string> = {
    ceremony: 'Ceremonia',
    cocktail: 'Cocktail',
    feast: 'Banquete',
    party: 'Fiesta',
};

type Props = {
    bands: Band[];
    soloists: Soloist[];
    control: ReturnType<typeof useForm<Wedding>>['control'];
};

export const PartyFormGroup: FC<Props> = ({ bands, control, soloists }) => {
    const { field } = useController({ name: 'party', control });
    return (
        <>
            <Selector
                label={labels['party']}
                onChange={(bandName) => {
                    if (!bandName) {
                        field.onChange({
                            bandName: undefined,
                            soloistName: undefined,
                        });
                        return;
                    }

                    field.onChange({
                        ...field.value,
                        bandName,
                        soloistName: undefined,
                    });
                }}
                items={[...bands, ...soloists]
                    .filter((item) => item.partyPrice !== undefined)
                    .map((item) => ({
                        label: item.name,
                        value: item.name,
                    }))}
                value={field.value?.bandName}
            />
            <FormControlLabel
                control={
                    <Checkbox
                        disabled={!field.value?.bandName}
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
                style={{ padding: '0 10%' }}
            />
        </>
    );
};
