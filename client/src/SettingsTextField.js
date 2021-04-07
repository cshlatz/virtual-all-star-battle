import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';

const SettingsTextField = (props) => {
    const [text, setText] = useState(props.value);

    const handleChange = (event) => {
        setText(event.target.value);
    };

    React.useEffect(() => {
        props.send({name: props.name, value: text});
    }, [text]);

    return (
        <TextField onChange={handleChange} defaultValue={props.value} label={props.label} />
    );
}

export default SettingsTextField;
