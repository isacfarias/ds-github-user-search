import React, { useEffect, useState } from 'react';
import Button from '../../core/components/Button';
import { makeRequest } from '../../core/utils/request';
import ImageLoader from './components/Loaders/ImageLoader';
import InfoLoader from './components/Loaders/InfoLoader';
import './styles.css';
import { Pessoa } from '../../core/types/Pessoa';

type FormEvent = React.ChangeEvent<HTMLInputElement>;

type FormState = {
    name: string;
}

const Search = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [pessoa, setPessoa] = useState<Pessoa>()

    const [formData, setFormData] = useState<FormState>({
        name: ''
    });

    const handleOnChange = (event: FormEvent ) => {
        const name = event.target.name;
        const value = event.target.value; 
        setFormData(data => ({ ...data, [name]: value}));
        console.log({name, value});
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log({formData});

        makeRequest({ url: `/${formData.name}` })
            .then(response => {
                setPessoa(response.data)
                setFormData({ name: '' });
            }).finally(() => {
                setIsLoading(false);
            });
    }



    return (
        <div className="App">
            <div className="main-search-container">

                <h1 className="seach-title">Encontre um perfil Github</h1>

                <form onSubmit={handleSubmit}>
                    <input name="name" 
                    type="text"
                    className="search-input"
                    placeholder="Usário GitHub" 
                    onChange={handleOnChange}/>
                    <Button text="Encontrar" />
                </form>

            </div>

            <div className="main-search-result">
                {isLoading ? <ImageLoader /> : (
                    <div className="main-search-image">
                        <img src={pessoa?.avatar_url} alt="" />
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