import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import ObjectiveMenu from './ObjectiveMenu';

const ObjectiveScreen = (props) => {
    const [objectives, setObjectives] = useState([]);

    const getObjectives = () => {
        let url = new URL(window.location.href + 'v2/objectives');
        fetch(url, { method: 'GET' })
            .then(response => response.json())
            .then(parsedJSON => setObjectives(parsedJSON))
    };

    const refresh = () => {
        getObjectives();
    }

    
    useEffect(() => {
        getObjectives();
    }, []);

    return ReactDOM.createPortal(
        <div className="popout objectives">
            <h2 className={"objectives__headline"}>Objectives</h2>
            <ObjectiveMenu objectives={objectives} refresh={refresh} />
            <div className="popout__back-button">
                <Button content="Back" variant="contained" color="primary" onClick={() => props.onClick(false)}/>
            </div>
        </div>,
        document.body
    );
}

export default ObjectiveScreen;
