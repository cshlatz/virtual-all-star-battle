import './stylesheets/SettingsButton.css';
import React, { useState } from 'react';
import Button from './Button';
import SettingsScreen from './SettingsScreen';

const SettingsButton = (props) => {
    const [isOpen, setOpen] = useState(false);

    const onClick = (open) => {
        setOpen(open);
    }

    return (
        <React.Fragment>
            <Button className="settings" variant="contained" color={props.color} onClick={() => onClick(true)} content={props.content} >{props.label}</Button>
            {
            isOpen ?
                React.cloneElement(props.children, { onClick: onClick })
            : null
            }
        </React.Fragment>
    );
}

export default SettingsButton;
