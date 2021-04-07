import './stylesheets/GameScreen.css';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import GameMenu from './GameMenu';

const GameScreen = (props) => {
    const [games, setGames] = useState([]);

    const getGames = () => {
        let url = new URL(window.location.href + 'v2/games');
        fetch(url, { method: 'GET' })
            .then(response => response.json())
            .then(parsedJSON => setGames(parsedJSON))
    };

    const refresh = () => {
        getGames();
    }

    useEffect(() => {
        getGames();
    }, []);

    return ReactDOM.createPortal(
        <div className="popout games">
            <h2 className={"games__headline"}>Games</h2>
            <GameMenu games={games} refresh={refresh} />
            <div className="popout__back-button">
                <Button content="Back" variant="contained" color="primary" onClick={() => props.onClick(false)}/>
            </div>
        </div>,
        document.body
    );
}

export default GameScreen;
