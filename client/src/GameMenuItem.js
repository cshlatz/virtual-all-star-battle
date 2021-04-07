import './stylesheets/GameMenuItem.css';
import React, { useState } from 'react';
import CircleIcon from './CircleIcon';
import Button from './Button';

const GameMenuItem = (props) => {
    const [name, setName] = useState(props.game.name);
    const [gameId, setGameId] = useState(props.game.game_id);
    const [yearMade, setYearMade] = useState(props.game.year_made);
    const [isOpen, toggleOpen] = useState(false);

    const toggleGame = () => {
        toggleOpen(!isOpen);
    }

    const handleSubmit = (method) => {
        const data = { name: name, game_id: gameId, year_made: yearMade };
        if (method === 'POST') {
            let url = new URL(window.location.href + 'v2/games/');
            fetch(url, { method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json'} });
            toggleOpen(false);
            props.refresh();
        }
        if (method === 'DELETE') {
            let url = new URL(window.location.href + 'v2/games/' + gameId);
            fetch(url, { method: 'DELETE', body: JSON.stringify({password: 'pw1'}), headers: {'Content-Type': 'application/json'} })
            toggleOpen(false);
            props.refresh();
        }
        if (method === 'PUT') {
            let url = new URL(window.location.href + 'v2/games/' + gameId);
            fetch(url, { method: 'PUT', body: JSON.stringify(data), headers: {'Content-Type': 'application/json'} })
            toggleOpen(false);
            props.refresh();
        }
    }

    const handleChange = (e) => {
        switch (e.target.name) {
            case "name":
                setName(e.target.value);
                break;
            case "game_id":
                setGameId(e.target.value);
                break;
            case "year_made":
                setYearMade(e.target.value);
                break;
        }
    }

    return (
        <React.Fragment>
        <div onClick={() => toggleGame()} className="gamemenuitem">
            <CircleIcon />
            <div className="gamemenuitem__info">
                <div className="gamemenuitem__primary-info">
                    {props.game.name + (props.game.year_made ? " - " + props.game.year_made : "")}
                </div>
                <div className="gamemenuitem__secondary-info">
                    <div className="gamemenuitem__secondary-info--id">
                        {props.game.game_id}
                    </div>
                </div>
            </div>
        </div>
        { isOpen ?
        <div className="gameedit">
            <div className="gameedit__form">
                <label>Game ID</label>
                <input disabled={!props.game.game_id ? false : true} onChange={handleChange} value={gameId} type="text" name="game_id" />
                <label>Game Name</label>
                <input onChange={handleChange} value={name} type="text" name="name" />
                <label>Year Made</label>
                <input onChange={handleChange} value={yearMade} type="number" name="year_made" />
            </div>
            <div className="gameedit__buttons">
                { props.game.game_id !== '' ?

                <div className="gameedit__buttons-edit">
                    <Button onClick={() => handleSubmit("PUT")} content="Update" variant="contained" color="primary" />
                    <Button onClick={() => handleSubmit("DELETE")} content="Delete" variant="contained" color="primary" />
                </div>
                :
                <Button onClick={() => handleSubmit("POST")} content="Create" variant="contained" color="primary" />
                }
            </div>
        </div>
        : null
        }
        </React.Fragment>
    );
}

export default GameMenuItem;
