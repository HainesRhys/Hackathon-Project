
import * as React from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function FilterField({
    data, onChange, placeholder, label, style, value, getValueSetter
}) {
    const [_value, setValue] = React.useState(value);

    return (
        <div style={style}>
            <Autocomplete
                multiple
                id="fixed-tags-demo"
                value={_value}
                onChange={(event, newValue) => {
                    setValue([
                        ...newValue,
                    ]);
                    onChange && onChange(_value)
                }}
                options={data}
                getOptionLabel={(option) => option.title}
                renderTags={(tagValue, getTagProps) =>
                    tagValue.map((option, index) => (
                        <Chip
                            label={option.title}
                            {...getTagProps({ index })}
                            style={{backgroundColor: option.color || 'white', color: option.textColor || 'black'}}
                        />
                    ))
                }
                style={{ minWidth: 200, maxWidth: 500,}}
                renderInput={(params) => (
                    <TextField {...params} label={label} placeholder={placeholder} />
                )}
            />
        </div>
    );
}