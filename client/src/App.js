import './stylesheets/App.css';
import React, { useState } from 'react';
import Header from './Header';
import GameTypeBar from './GameTypeBar';
import GameTable from './GameTable';
import OptionBar from './OptionBar';

import { ASB_OPTIONS, generateMatch } from './utils/OptionUtils';

const App = (props) => {
    const [data, setData] = useState(ASB_OPTIONS);

    const [games, setGames] = useState();

    const onChangeHandler = (optionData) => {
        let newData = [...data];
        let option = data.find(f => f.name === optionData.name);
        if (option) {
            option.value = optionData.value;
        }
        setData(newData);
    };

    const generateMatch = (type, options) => {
        let url = new URL(window.location.href + 'v2/asb');
        data.forEach(option => {
            url.searchParams.append(option.name, option.value);
        });
        url.searchParams.append('type', type);
        fetch(url, { method: 'GET' })
            .then(response => response.json())
            .then(parsedJSON => setGames(parsedJSON));
    };

    return (
      <div className="main">
          <Header />
          <GameTypeBar passedClass="main__types" generateMatch={generateMatch} />
          <OptionBar options={data} send={onChangeHandler} />
          <GameTable games={games} passedClass="main__table"/>
      </div>
    );
}

export default App;
