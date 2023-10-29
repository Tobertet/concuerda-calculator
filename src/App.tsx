import { FC, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { Separator } from './components/Separator';
import { useForm } from 'react-hook-form';
import { Wedding } from './domain/types';
import { ServiceFormGroup } from './components/ServiceFormGroup';
import { BANDS } from './domain/constants/bands';
import { InvoicePrice } from './components/Invoice';
import { calculateInvoice } from './domain/functions';
import { PartyFormGroup } from './components/PartyFormGroup';
import { SOLOISTS } from './domain/constants/soloists';

export const App: FC = () => {
    const { control, watch } = useForm<Wedding>();

    const wedding = watch();

    const invoice = useMemo(() => calculateInvoice(wedding), [wedding]);

    return (
        <ThemeProvider theme={theme}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    background: '#18160f',
                }}
            >
                <img
                    alt="Logo de Tu boda con velas"
                    src="/concuerda-calculator/logo.png"
                />
                <h2
                    style={{
                        color: '#fbf5e1',
                        textAlign: 'center',
                        fontFamily: 'Abhaya Libre',
                        letterSpacing: '2px',
                    }}
                >
                    DISEÑA TU PACK
                </h2>
                <ServiceFormGroup
                    control={control}
                    bands={BANDS}
                    name="ceremony"
                />
                <Separator />
                <ServiceFormGroup
                    control={control}
                    bands={BANDS}
                    name="cocktail"
                />
                <Separator />
                <ServiceFormGroup
                    control={control}
                    bands={BANDS}
                    name="feast"
                />
                <Separator />
                <PartyFormGroup
                    control={control}
                    bands={BANDS}
                    soloists={SOLOISTS.ALL}
                />
                <Separator />
                <InvoicePrice invoice={invoice} />
            </div>
        </ThemeProvider>
    );
};
