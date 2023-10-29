import { FC } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { NO_GROUP_LABEL } from '../domain/constants/constants';

type Item = {
    label: string;
    value: string;
};

type Props = {
    label?: string;
    items: Item[];
    value: string | undefined;
    onChange: (value: string | undefined) => void;
};

export const Selector: FC<Props> = ({ label, items, value, onChange }) => (
    <div style={{ padding: '0 10%' }}>
        <Select
            value={value || NO_GROUP_LABEL}
            onChange={(e: SelectChangeEvent) => {
                onChange(
                    e.target.value === NO_GROUP_LABEL
                        ? undefined
                        : e.target.value
                );
            }}
            style={{ width: '100%' }}
        >
            <MenuItem value={NO_GROUP_LABEL}>{NO_GROUP_LABEL}</MenuItem>
            {items.map((item) => (
                <MenuItem value={item.value} key={item.value}>
                    {item.label}
                </MenuItem>
            ))}
        </Select>
    </div>
);
