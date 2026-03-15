import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({countriesPromise}) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries = (country) =>{
    if (visitedCountries.includes(country)) {
        setVisitedCountries(visitedCountries.filter(c => c !== country));
    } else {
        setVisitedCountries([...visitedCountries, country]);
    }
  }

  const countriesData = use(countriesPromise)
  const countries = countriesData.countries
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>In The Countries: {countries.length}</h1>
      <h2 style={{ textAlign: 'center', marginTop: '36px' }}>Total Country Visited: {visitedCountries.length}</h2>
      <div className="countries-container">
        {
          countries.map(country => <Country 
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries = {handleVisitedCountries}
            ></Country>)
        }
      </div>
    </div>
  );
};

export default Countries;