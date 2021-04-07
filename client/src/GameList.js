import './stylesheets/GameList.css';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import SettingsInput from './SettingsInput';
import FormGroup from '@material-ui/core/FormGroup';
import { MdSettings } from 'react-icons/md'

const GameList = (props) => {
    const [isOpen, toggleOpen] = useState(false);

    /**
     * Should probably come from the database */
    const options = props.options;

    const toggleOptionsMenu = () => {
        toggleOpen(!isOpen);
    };

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

    return (
        <div className={props.passedClass}>
            <Button onClick={() => toggleGameListMenu()} variant="contained" color="primary">
                <MdSettings />
            </Button>
            <div className={props.passedClass + "__menu--" + (isOpen ? 'open' : 'closed')}>
                <div className={props.passedClass + "__settings"}>
                    <h2 className={props.passedClass + "__headline"}>Settings</h2>
                    <FormGroup>
                        {renderOptions()}
                    </FormGroup>
                    <Button onClick={() => toggleOptionsMenu()} variant="contained" color="primary">
                    Back
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default GameList;
