import React from 'react';
import './styles.css';

type Props = {
    text: string;
}

const Button = ({text}: Props) => (
    <div >
        <button className="btn-primary">
            <h5 className="btn-text">{text}</h5>
        </button>
    </div>
);

export default Button;