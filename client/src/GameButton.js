import './stylesheets/GameButton.css';
import Button from './Button';

/* react-icon Icons */
import { FaChartLine, FaGolfBall, FaStopwatch } from 'react-icons/fa';

const GameButton = (props) => {

    const geticon = () => {
        switch (props.type) {
            case "score":
                return <FaChartLine size={70}/>;
            case "golf":
                return <FaGolfBall size={70}/>
            case "bingo":
                return <FaStopwatch size={70}/>
        }
    }

    return (
        <Button onClick={props.onClick} className="button" variant="contained" color="primary" content={geticon()}/>
    );
}

export default GameButton;
