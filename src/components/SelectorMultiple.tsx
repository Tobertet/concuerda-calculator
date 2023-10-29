import { FC } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { NO_GROUP_LABEL } from '../domain/constants/constants';
import { Box, Checkbox, Chip, ListItemText } from '@mui/material';

type Item = {
    label: string;
    value: string;
};

type Props = {
    label?: string;
    items: Item[];
    value: string[];
    onChange: (value: string[]) => void;
};

export const SelectorMultiple: FC<Props> = ({
    label,
    items,
    value,
    onChange,
}) => (
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
            multiple
            displayEmpty
            value={value}
            renderValue={(selected) => {
                if (selected.length === 0) {
                    return NO_GROUP_LABEL;
                }

                return (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                    </Box>
                );
            }}
            onChange={(e: SelectChangeEvent<string[]>) => {
                onChange(e.target.value as string[]);
            }}
            style={{ width: '100%' }}
        >
            {items.map((item) => (
                <MenuItem value={item.value} key={item.value}>
                    <Checkbox checked={value.indexOf(item.value) > -1} />
                    <ListItemText primary={item.label} />
                </MenuItem>
            ))}
        </Select>
    </div>
);
