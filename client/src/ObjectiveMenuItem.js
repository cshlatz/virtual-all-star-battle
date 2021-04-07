import './stylesheets/ObjectiveMenuItem.css';
import React, { useState } from 'react';
import Button from './Button';

const ObjectiveMenuItem = (props) => {
    const [objective, setObjective] = useState(props.objective.objective);
    const [gameId, setGameId] = useState(props.objective.game_id);
    const [par, setPar] = useState(props.objective.par);
    const [score, setScore] = useState(props.objective.score);

    const handleSubmit = (method) => {
        const data = { objective: objective, game_id: gameId, par: par, score: score };
        if (method === 'POST') {
            let url = new URL(window.location.href + 'v2/objectives/');
            fetch(url, { method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json'} });
            props.refresh();
        }
        if (method === 'DELETE') {
            let url = new URL(window.location.href + 'v2/objectives/' + gameId);
            fetch(url, { method: 'DELETE', body: JSON.stringify({password: 'pw1'}), headers: {'Content-Type': 'application/json'} })
            props.refresh();
        }
        if (method === 'PUT') {
            let url = new URL(window.location.href + 'v2/objectives/' + gameId);
            fetch(url, { method: 'PUT', body: JSON.stringify(data), headers: {'Content-Type': 'application/json'} })
            props.refresh();
        }
    }

    const handleChange = (e) => {
        switch (e.target.name) {
            case "objective":
                setObjective(e.target.value);
                break;
            case "game_id":
                setGameId(e.target.value);
                break;
            case "par":
                setPar(e.target.value);
                break;
            case "score":
                setScore(e.target.value);
                break;
        }
    }

    return (
        <div className="objectiveitem">
            <div className="objectiveitem__primary">
                <label>Objective</label>
                <input value={objective} name="objective" type="text" onChange={handleChange} />
                <div className="objectiveitem__primary-buttons">
                    <Button onClick={() => handleSubmit("PUT")} content="Update" variant="contained" color="primary" />
                    <Button onClick={() => handleSubmit("DELETE")} content="Delete" variant="contained" color="primary" />
                </div>
            </div>
            <div className="objectiveitem__secondary">
                <label>Par</label>
                <input value={par} name="par" type="number" onChange={handleChange} />
                <label>Score</label>
                <input checked={score} name="goal" type="checkbox" onChange={handleChange} />
            </div>
        </div>
    );
}

export default ObjectiveMenuItem;
