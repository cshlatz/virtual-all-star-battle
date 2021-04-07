import './stylesheets/GameTable.css';
import { DataGrid } from '@material-ui/data-grid';

const GameTable = (props) => {

    const columns = [
        {field: 'game', headerName: 'Game', flex: 0.75},
        {field: 'objective', headerName: 'Objective', flex: 1}
    ];

    return (
        (props.games ?
        <div className={props.passedClass}>
            <DataGrid rows={props.games} columns={columns} />
        </div>
        : null)
    );
}

export default GameTable;
