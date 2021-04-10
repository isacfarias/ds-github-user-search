import React from 'react';
import './styles.css';

type Props = {
    text: string;
    classes: string;
}

const Button = ({text, classes}: Props) => (
    <div >
        <button className={`${classes} btn-primary`}>
            <h5 className="btn-text">{text}</h5>
        </button>
    </div>
);

export default Button;