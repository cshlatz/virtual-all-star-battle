import './stylesheets/SettingsScreen.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

import SettingsInput from './SettingsInput';
import FormGroup from '@material-ui/core/FormGroup';
import { MdSettings } from 'react-icons/md'

const SettingsScreen = (props) => {

    const options = props.options;

    const renderOptions = () => {
        let output = [];
        options.forEach(option => {
            let field = (
                <SettingsInput send={props.send} type={option.type} name={option.name} label={option.label} value={option.value}/>
            );
            output.push(field);
        });
        return (
            <FormGroup>
                {output}
            </FormGroup>
        );
    };
    return ReactDOM.createPortal(
        <div className="popout settings">
            <h2 className={props.passedClass + "__headline"}>Settings</h2>
            <FormGroup>
                {renderOptions()}
            </FormGroup>
            <Button content="Back" variant="contained" color="primary" onClick={() => props.onClick(false)}/>
        </div>,
        document.body
    );
}

export default SettingsScreen;
