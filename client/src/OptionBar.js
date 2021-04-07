import GameScreen from './GameScreen';
import ObjectiveScreen from './ObjectiveScreen';
import Options from './Options';
import SettingsButton from './SettingsButton';
import SettingsScreen from './SettingsScreen';

const OptionBar = (props) => {
    return (
        <div className="options-bar">
            <SettingsButton color="primary" label="Settings" content="Settings">
                <SettingsScreen options={props.options} send={props.send}/>
            </SettingsButton>
            <SettingsButton color="primary" label="Games" content="Games">
                <GameScreen />
            </SettingsButton>
            <SettingsButton color="primary" label="Objectives" content="Objectives">
                <ObjectiveScreen />
            </SettingsButton>
        </div> 
    )
}

export default OptionBar;
