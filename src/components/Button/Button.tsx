import { ButtonHTMLAttributes } from 'react';
import './Button.scss';
import { ButtonColors } from '../../models/button-colors.enum';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    readonly color: ButtonColors;
    readonly content: string;
}

function Button({ color = ButtonColors.grey, content, ...rest }: ButtonProps) {
    return(
        <button className={`button button_${ color }`} { ...rest }>{ content }</button>
    );
}

export default Button;