import React from 'react';
import Button from '../../core/components/Button';
import './styles.css';

const Home = () => (
    <div className="main-container">

        <h1 className="text-title">
            Desafio do Capítulo 3,<br /> Bootcamp DevSuperior
        </h1>

        <div className="main-description">
            <p className="text-subtitle">
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
            </p>

            <p className="text-subtitle">
                Favor observar as instruções passadas no capítulo sobre a <br/> elaboração deste projeto.
            </p>

            <p className="text-subtitle">
                Este design foi adaptado a partir de Ant Design System for Figma, de <br/> Mateusz Wierzbicki: <span className="subtitle-mail">antforfigma@gmail.com</span>
            </p>
        </div>

        <Button text="Começar" />

    </div>
);

export default Home;