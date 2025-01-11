import { type ButtonProps } from "@/interfaces";
const Button : React.FC<ButtonProps> = ({text, size, shape, onClick}) => {
    return (
        <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ${size} ${shape}`} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;