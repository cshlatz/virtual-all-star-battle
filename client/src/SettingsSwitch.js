import React, { useEffect, useState } from 'react';
import Switch from '@material-ui/core/Switch';

const SettingsSwitch = (props) => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    React.useEffect(() => {
        props.send({name: props.name, value: checked});
    }, [checked]);

    return (
        <Switch checked={checked} onChange={handleChange} />
    );
}

export default SettingsSwitch;
