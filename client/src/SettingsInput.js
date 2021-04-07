import SettingsSwitch from './SettingsSwitch';
import SettingsTextField from './SettingsTextField';

import FormControlLabel from '@material-ui/core/FormControlLabel';

import PropTypes from 'prop-types';

const SettingsInput = (props) => {
    const renderSettingsField = () => {
        switch (props.type) {
            case "switch":
                return <SettingsSwitch send={props.send} name={props.name}/>
            case "text":
                return <SettingsTextField send={props.send} name={props.name} value={props.value} label={props.label}/>
        }
    };

    return (
        <FormControlLabel
            control={renderSettingsField()}
            label={(props.type !== "text" ? props.label : '')}
        />
    );
};

SettingsInput.propTypes = {
    name: PropTypes.string.isRequired,
    send: PropTypes.func.isRequired,
};

export default SettingsInput;
