import React, { useState } from 'react';
import GameMenuItem from './GameMenuItem';

const GameMenu = (props) => {

    const renderGamesList = () => {
        let output = [];
        props.games.forEach(game => {
            console.log(game);
            let field = (
                <GameMenuItem game={game} refresh={props.refresh}/>
            );
            output.push(field);
        });

        return (
            <div className="gamelist">
                {output}
            </div>
        );
    };

    return (
        <div>
        {renderGamesList()}
        <GameMenuItem game={{game_id: ''}} refresh={props.refresh}/>
        </div>
    );
};

export default GameMenu;
