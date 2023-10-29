import { FC } from 'react';
import { noGroupLabel } from '../variables';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

type Item = {
    label: string;
    value: string | undefined;
};

type Props = {
    label?: string;
    items: Item[];
    value: string | undefined;
    onChange: (value: string | undefined) => void;
};

export const Selector: FC<Props> = ({ label, items, value, onChange }) => (
    <div style={{ padding: '0 10%' }}>
        {label && (
            <h4
                style={{
                    color: '#fbf5e1',
                    textAlign: 'center',
                    marginTop: 0,
                    fontSize: '20px',
                    fontFamily: 'Abhaya Libre',
                }}
            >
                {label}
            </h4>
        )}
        <Select
            multiple={true}
            value={value || noGroupLabel}
            onChange={(e: SelectChangeEvent) => {
                onChange(
                    e.target.value === noGroupLabel ? undefined : e.target.value
                );
            }}
            style={{ background: 'white', width: '100%' }}
        >
            <MenuItem value={noGroupLabel}>{noGroupLabel}</MenuItem>
            {items.map((item) => (
                <MenuItem value={item.value} key={item.value}>
                    {item.label}
                </MenuItem>
            ))}
        </Select>
    </div>
);
