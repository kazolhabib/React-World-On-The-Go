import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({countriesPromise}) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags]= useState([]);

  const handleVisitedCountries = (country) =>{
    if (visitedCountries.includes(country)) {
        setVisitedCountries(visitedCountries.filter(c => c !== country));
    } else {
        setVisitedCountries([...visitedCountries, country]);
    }
  }

  const handleVisitedFlag = (flag) =>{
    const newVisitedFlags = [...visitedFlags, flag]
    setVisitedFlags(newVisitedFlags)
  }

  const countriesData = use(countriesPromise)
  const countries = countriesData.countries
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>In The Countries: {countries.length}</h1>
      <h2 style={{ textAlign: 'center', marginTop: '36px' }}>Total Country Visited: {visitedCountries.length}</h2>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Total Flags Visited: {visitedFlags.length}</h2>
      <div className='visited-flags-wrapper'>
        {
          visitedFlags.map(flag => <img src={flag}></img>)
        }
      </div>

      <div className="countries-container">
        {
          countries.map(country => <Country 
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries = {handleVisitedCountries}
            handleVisitedFlag = {handleVisitedFlag}
            ></Country>)
        }
      </div>
    </div>
  );
};

export default Countries;