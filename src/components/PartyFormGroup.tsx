import { FC } from 'react';
import { Selector } from './Selector';
import { useController, useForm } from 'react-hook-form';
import { Band, Service, Soloist, Wedding } from '../domain/types';
import { SERVICE_LABELS } from '../domain/constants/constants';

type Props = {
    bands: Band[];
    soloists: Soloist[];
    control: ReturnType<typeof useForm<Wedding>>['control'];
    service: Extract<Service, 'pre-party' | 'party'>;
};

export const PartyFormGroup: FC<Props> = ({
    bands,
    control,
    soloists,
    service,
}) => {
    const { field } = useController({ name: service, control });
    return (
        <>
            <h4
                style={{
                    color: '#fbf5e1',
                    textAlign: 'center',
                    marginTop: 0,
                    fontSize: '20px',
                    fontFamily: 'Abhaya Libre',
                }}
            >
                {SERVICE_LABELS[service]}
            </h4>
            <Selector
                label={SERVICE_LABELS[service]}
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
            {/* <FormControlLabel
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
                style={{ color: 'white', padding: '0 10%' }}
            /> */}
        </>
    );
};
