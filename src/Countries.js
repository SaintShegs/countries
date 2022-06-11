import React from 'react'

import {useState, useEffect} from 'react';
import Country_card from './Country_card';

const Countries = () => {

  const [countries, setCountries]= useState([])
  const [country_search, setCountry_search]= useState([])
    
  const getCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json()
    console.log(data);
    setCountries(data)
  }

  useEffect(() => {
      getCountries()
  }, [])

  const search = (e) => {
    const search = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    const filteredCountries = countries.filter(country => country.name.common.includes(search));
    console.log(filteredCountries);
    setCountry_search(filteredCountries);
  }

  const filter = (e) => {
    const filter = e.target.value;
    const filteredCountries = countries.filter(country => country.region.includes(filter));
    console.log(filteredCountries);
    setCountry_search(filteredCountries);
  }
 









  return (
    <div className='container'>
      
    {/* header of the app  */}
      



    <div className='filter'>
      <input type="text" name="country" id="" placeholder='Search for a country' onChange={search} />

      <select name="region" id="" onChange={filter}>
        <option value=""> filter by region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia"> Asia</option>
        <option value="Europe"> Europe</option>
        <option value="Oceania"> Oceania</option>
      </select>

    </div>

    <div className='cards'> 

    <div className="card">



      {country_search && country_search.length >=1 ? country_search.map(country => <Country_card country={country} key={country.name.common} />) : countries && countries.map(country => <Country_card country={country} key={country.name.common} />)}


    </div>

              {/* <div className='card'>

               {countries.map((country,index)=>(

                  <div className='country-card' key={index}>
                      <div className='country-card-image'>
                          <img src={country.flags.png} alt="" />
                      </div>
                      <div className='country-card-info'>
                        <h4>{country.name.common}</h4>
                        <p><span>Population :</span> {country.population}</p>
                        <p><span>Region :</span> {country.region}</p>
                        <p><span>Capital :</span> {country.capital}</p>
                      </div>
                  </div>

               ))}

               
              </div> */}
    </div>

    </div>
  )
}

export default Countries