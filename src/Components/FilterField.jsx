
import * as React from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function FilterField({
    data, onChange, placeholder, label, style
}) {
    const fixedOptions = [];
    const [value, setValue] = React.useState([...fixedOptions]);

    return (
        <div style={style}>
            <Autocomplete
                multiple
                id="fixed-tags-demo"
                value={value}
                onChange={(event, newValue) => {
                    setValue([
                        ...fixedOptions,
                        ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
                    ]);
                    onChange && onChange(fixedOptions)
                }}
                options={data}
                getOptionLabel={(option) => option}
                renderTags={(tagValue, getTagProps) =>
                    tagValue.map((option, index) => (
                        <Chip
                            label={option}
                            {...getTagProps({ index })}
                            disabled={fixedOptions.indexOf(option) !== -1}
                        />
                    ))
                }
                style={{ minWidth: 200, maxWidth: 500 }}
                renderInput={(params) => (
                    <TextField {...params} label={label} placeholder={placeholder} />
                )}
            />
        </div>
    );
}