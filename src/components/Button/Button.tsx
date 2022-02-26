
type ButtonProps = {
    label: string;
}

// const defaultProps = {
//     label: "Button Label"
// }

const Button: React.FC<ButtonProps> = (props) => {
    return <button type="button">{props.label}</button>
}

// Button.defaultProps = defaultProps;

export default Button;
