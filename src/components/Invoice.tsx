import { Divider } from '@mui/material';
import { FC } from 'react';
import { Invoice } from '../domain/types';
import { SERVICE_LABELS } from '../domain/constants/constants';

const euroFormatter = Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    useGrouping: true,
});

const InvoiceLine: FC<{
    label: string;
    price: number;
    discountedPrice: number | undefined;
    hasError?: boolean;
}> = ({ label, price, discountedPrice, hasError }) => (
    <p
        style={{
            fontSize: '16px',
            display: 'flex',
            justifyContent: 'space-between',
        }}
    >
        <span>{label}</span>{' '}
        <span style={{ color: hasError ? 'red' : undefined }}>
            {discountedPrice && (
                <span style={{ paddingRight: 8 }}>
                    {euroFormatter.format(discountedPrice)}
                </span>
            )}
            <span style={{ textDecoration: discountedPrice && 'line-through' }}>
                {euroFormatter.format(price)}
            </span>
        </span>
    </p>
);

type Props = {
    invoice: Invoice;
};

export const InvoicePrice: FC<Props> = ({ invoice }) => {
    return (
        <div style={{ background: 'white', margin: '5%', padding: '5%' }}>
            {invoice.ceremony && invoice.ceremony?.length > 0 && (
                <>
                    <h4
                        style={{
                            fontSize: '18px',
                            display: 'flex',
                            justifyContent: 'center',
                            fontWeight: '500',
                        }}
                    >
                        {SERVICE_LABELS['ceremony']}
                    </h4>
                    <>
                        {invoice.ceremony.map((item) => (
                            <InvoiceLine
                                label={item.label}
                                price={item.price}
                                discountedPrice={item.discountedPrice}
                                key={item.label}
                            />
                        ))}
                    </>
                </>
            )}
            <Divider />
            {invoice.cocktail && invoice.cocktail?.length > 0 && (
                <>
                    <h4
                        style={{
                            fontSize: '18px',
                            display: 'flex',
                            justifyContent: 'center',
                            fontWeight: '500',
                        }}
                    >
                        {SERVICE_LABELS['cocktail']}
                    </h4>
                    <>
                        {invoice.cocktail.map((item) => (
                            <InvoiceLine
                                label={item.label}
                                price={item.price}
                                discountedPrice={item.discountedPrice}
                                key={item.label}
                            />
                        ))}
                    </>
                </>
            )}
            <Divider />
            {invoice.feast && invoice.feast?.length > 0 && (
                <>
                    <h4
                        style={{
                            fontSize: '18px',
                            display: 'flex',
                            justifyContent: 'center',
                            fontWeight: '500',
                        }}
                    >
                        {SERVICE_LABELS['feast']}
                    </h4>
                    <>
                        {invoice.feast.map((item) => (
                            <InvoiceLine
                                label={item.label}
                                price={item.price}
                                discountedPrice={item.discountedPrice}
                                key={item.label}
                            />
                        ))}
                    </>
                </>
            )}
            <Divider />
            {invoice['pre-party'] && invoice['pre-party']?.length > 0 && (
                <>
                    <h4
                        style={{
                            fontSize: '18px',
                            display: 'flex',
                            justifyContent: 'center',
                            fontWeight: '500',
                        }}
                    >
                        {SERVICE_LABELS['pre-party']}
                    </h4>
                    <>
                        {invoice['pre-party'].map((item) => (
                            <InvoiceLine
                                label={item.label}
                                price={item.price}
                                discountedPrice={item.discountedPrice}
                                key={item.label}
                            />
                        ))}
                    </>
                </>
            )}
            <Divider />
            {invoice.party && invoice.party?.length > 0 && (
                <>
                    <h4
                        style={{
                            fontSize: '18px',
                            display: 'flex',
                            justifyContent: 'center',
                            fontWeight: '500',
                        }}
                    >
                        {SERVICE_LABELS['party']}
                    </h4>
                    <>
                        {invoice.party.map((item) => (
                            <InvoiceLine
                                label={item.label}
                                price={item.price}
                                discountedPrice={item.discountedPrice}
                                key={item.label}
                            />
                        ))}
                    </>
                </>
            )}
            <Divider />
            <InvoiceLine
                label="Total"
                price={invoice.total.price}
                discountedPrice={invoice.total.discountedPrice}
                hasError={invoice.errors.length > 0}
            />
            {invoice.errors.map((error) => (
                <p key={error} style={{ color: 'red' }}>
                    {error}
                </p>
            ))}

            <p style={{ textAlign: 'right', paddingTop: '20px' }}>
                <i>
                    <strong>Promoción:</strong> 10% de descuento.
                </i>
            </p>
            <p style={{ textAlign: 'right' }}>IVA no incluido.</p>
            <p style={{ textAlign: 'right' }}>Consultar desplazamiento.</p>
        </div>
    );
};
