import React, { useEffect, useState } from 'react';
import Button from '../../core/components/Button';
import ImageLoader from './components/Loaders/ImageLoader';
import InfoLoader from './components/Loaders/InfoLoader';
import './styles.css';


const Search = () => {

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        setIsLoading(true);

    }, []);


    return (
        <div className="App">
            <div className="main-search-container">

                <h1 className="seach-title">Encontre um perfil Github</h1>

                <input type="text" className="search-input" placeholder="Usário GitHub" />

                <Button text="Encontrar" />
            </div>

            <div className="main-search-result">
                {isLoading ? <ImageLoader /> : (
                    <div className="main-search-image">
                        <img src="" alt="" />
                        <Button text="Ver perfil" />
                    </div>)
                }
                {isLoading ? <InfoLoader /> : (
                    <div className="main-search-info">
                    </div>)
                }
            </div>
        </div>
    );

}

export default Search;