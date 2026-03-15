import React, { useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
        handleVisitedCountries(country);
    }
    return (
        <div className={`country-card ${visited ? 'country-visited' : 'country-not-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>{country.population.population > 300000 ? 'Big Country' : 'Small Country'}</p>
            <button className='country-btn' onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
            <button className='country-btn' onClick={() => {handleVisitedFlag(country.flags.flags.png)}}>Visited Countries Flag</button>
        </div>
    );
};

export default Country;