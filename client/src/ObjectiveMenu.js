import React, { useState } from 'react';
import ObjectiveMenuItem from './ObjectiveMenuItem';

const ObjectiveMenu = (props) => {

    const renderGamesList = () => {
        const objectivesByGames = props.objectives.reduce((acc, value) => {
            if (!acc[value.game_id]) {
                acc[value.game_id] = [];
            }

            acc[value.game_id].push(value);

            return acc;
        }, {});

        let output = [];
        for (const game in objectivesByGames) { 
            output.push(<h3>{game}</h3>);
            objectivesByGames[game].forEach(objective => {
                output.push(<ObjectiveMenuItem objective={objective} refresh={props.refresh} />);
            });
            output.push(<div>New Objective</div>);
        }
        return (
            <div className="objectivelist">
                {output}
            </div>
        );
    };

    return (
        <div>
            {renderGamesList()}
        </div>
    );
};

export default ObjectiveMenu;
