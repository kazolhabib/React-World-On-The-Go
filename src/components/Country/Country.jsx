import React from 'react';
import './Country.css';

const Country = ({ country }) => {
    console.log(country)
    return (
        <div className="country-card">
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>{country.population.population > 300000 ? 'Big Country' : 'Small Country'}</p>
        </div>
    );
};

export default Country;