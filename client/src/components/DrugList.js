import React, { useEffect, useState } from 'react';
import api from '../api/api.js';

const DrugList = ({ setIsLoading, setDrugsData, drugsData }) => {
    const [error, setError] = useState('');
    console.log(error);
    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true);
                const response = await api.get('/');
                const dataArray = response.data;
                setDrugsData(dataArray);
            } catch (err) {
                if (err.response) {
                    // Not in the 200 response range
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(err.message);
                    setError(err.message);
                }
            } finally {
                setIsLoading(false);
            }
        };
        getData();
    }, [setIsLoading, setDrugsData]);
    return (
        <div>
            <h1>Drug List</h1>
            <ul>
                {drugsData.map((drug) => (
                    <li key={drug.id}>{drug.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default DrugList;
