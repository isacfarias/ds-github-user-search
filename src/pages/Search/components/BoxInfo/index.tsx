import React from 'react';
import './styles.css'

type Props = {
    field: string;
    value: string;

}

const BoxInfo = ({field, value}: Props) => (
    <div className="main-box-info">
        <h6 className="main-box-info-title">{field}:</h6>
        <h6 className="main-box-info-value">{value}</h6>        
    </div>
)

export default BoxInfo;