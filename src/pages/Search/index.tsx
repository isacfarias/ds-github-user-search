import React, { useEffect, useState } from 'react';
import Button from '../../core/components/Button';
import { makeRequest } from '../../core/utils/request';
import ImageLoader from './components/Loaders/ImageLoader';
import InfoLoader from './components/Loaders/InfoLoader';
import { format } from 'date-fns';
import './styles.css';
import { Pessoa } from '../../core/types/Pessoa';
import BoxInfo from './components/BoxInfo';
import { Link } from 'react-router-dom';


type FormEvent = React.ChangeEvent<HTMLInputElement>;

type FormState = {
    name: string;
}

const Search = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [pessoa, setPessoa] = useState<Pessoa>();
    const [date, setDate] = useState('');

    const [formData, setFormData] = useState<FormState>({
        name: ''
    });

    const handleOnChange = (event: FormEvent) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [name]: value }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsLoading(true);
        makeRequest({ url: `/${formData.name}` })
            .then(response => {
                setPessoa(response.data)
                setFormData({ name: '' });

                const created_at = Date.parse(response.data.created_at);
                setDate(format(created_at, 'dd/MM/yyyy'));

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
                        onChange={handleOnChange} />

                    <Button text="Encontrar" classes="btn-search" />

                </form>

            </div>

            <div className="main-search-result">
                {
                    isLoading ? <ImageLoader /> : (
                        <div className="main-search-image">
                            <img src={pessoa?.avatar_url} alt="" />
                            <a href={`${pessoa?.html_url}`} target="_blank">
                                <Button text="Ver perfil" classes="btn-perfil" />
                            </a>
                        </div>
                    )
                }

                {
                    isLoading ? <InfoLoader /> : (
                        <div className="main-search-info">
                            <div className="main-info-number">
                                <h6 className="main-info-text-number">Repositórios públicos: {`${pessoa?.public_repos}`}</h6>
                                <h6 className="main-info-text-number">Seguidores: {`${pessoa?.followers}`}</h6>
                                <h6 className="main-info-text-number">Seguindo: {`${pessoa?.following}`}</h6>
                            </div>
                            <div className="main-info-description">
                                <h1 className="main-info-title">Informações</h1>
                                <BoxInfo field="Empresa" value={`${pessoa?.company}`} />
                                <BoxInfo field="Website/Blog" value={`${pessoa?.blog}`} />
                                <BoxInfo field="Localidade" value={`${pessoa?.location}`} />
                                <BoxInfo field="Membro desde" value={`${date}`} />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );

}

export default Search;