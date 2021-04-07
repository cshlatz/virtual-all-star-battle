import './stylesheets/Button.css';
import MaterialUiButton from '@material-ui/core/Button';

const Button = (props) => {
    return (
        <MaterialUiButton
            className={"button " + "button__" + props.className}
            variant={props.variant}
            color={props.color}
            onClick={props.onClick}
        >
            {props.content}
        </MaterialUiButton>
    )
}

export default Button;
