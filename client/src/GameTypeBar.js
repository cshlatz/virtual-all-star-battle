import GameButton from './GameButton';

const GameTypeBar = (props) => {
    return (
        <div className={props.passedClass}>
            <GameButton onClick={() => props.generateMatch("score", props.options)} type={"score"}/>
            <GameButton onClick={() => props.generateMatch("golf", props.options)} type={"golf"}/>
            <GameButton onClick={() => props.generateMatch("bingo", props.options)} type={"bingo"}/>
        </div>
    )
}

export default GameTypeBar;
