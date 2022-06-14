import React from 'react'
import { Link } from 'react-router-dom';


const Country_card = ({country}) => {
    
    // const [countries, setCountries]= useState([])
    
    // const getCountries = async () => {
    //   const response = await fetch('https://restcountries.com/v3.1/all')
    //   const data = await response.json()
    //   setCountries(data)
    // }
  
    // useEffect(() => {
    //     getCountries()
    // }, [])

    
    return (

      

        
        
        
        
        <div className='card-item'>
          <Link to={`./country-info/${country.capital}`}>
          
                {country && (


                    <div className='country-card'>
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

                )}
          
          
          </Link>

        </div>














  )
}

export default Country_card

