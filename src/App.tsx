import { FC, useEffect, useMemo } from 'react';
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
import CryptoJS from 'crypto-js';

const AES_KEY = 'HASH_KEY';
const STATE_URL_PARAM = 'state';

const urlSearchParams = new URLSearchParams(window.location.search);
const hashedState = urlSearchParams.get(STATE_URL_PARAM);
let weddingFromState: Wedding | undefined = undefined;
if (hashedState) {
    const state = CryptoJS.AES.decrypt(hashedState, AES_KEY);
    weddingFromState = JSON.parse(state.toString(CryptoJS.enc.Utf8));
}

export const App: FC = () => {
    const { control, watch } = useForm<Wedding>({
        defaultValues: weddingFromState,
    });

    const wedding = watch();

    useEffect(() => {
        const cipherText = CryptoJS.AES.encrypt(
            JSON.stringify(wedding),
            AES_KEY
        ).toString();
        let url = new URL(window.location.href);
        if (!url.searchParams.has(STATE_URL_PARAM)) {
            url.searchParams.append(STATE_URL_PARAM, cipherText);
        } else {
            url.searchParams.set(STATE_URL_PARAM, cipherText);
        }
        window.history.pushState({}, '', url.href);
    }, [wedding]);

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
                    service="pre-party"
                    control={control}
                    bands={BANDS}
                    soloists={[]}
                />
                <Separator />
                <PartyFormGroup
                    service="party"
                    control={control}
                    bands={[]}
                    soloists={SOLOISTS.ALL}
                />
                <Separator />
                <InvoicePrice invoice={invoice} />
            </div>
        </ThemeProvider>
    );
};
