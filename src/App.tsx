import React, { useEffect, useState } from 'react';
import API from './services/api';

const App: React.FC = () => {
    const [message, setMessage] = useState<string>('Chargement en cours...');

    useEffect(() => {
        API.get('/')
            .then((response) => {
                setMessage(response.data.message);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données :', error);
                setMessage('Erreur lors de la récupération des données.');
            });
    }, []);

    return (
        <div>
            <h1>Learnia Frontend</h1>
            <p>{message}</p>
        </div>
    );
};

export default App;
