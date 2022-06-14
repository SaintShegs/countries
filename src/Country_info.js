import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'

const Country_info = () => {

    let { country_info } = useParams();

    const [country, setCountry] = useState(null);

    const getCountry = async () => {
        if (country_info.length > 3) {
        const response = await fetch(`https://restcountries.com/v3.1/capital/${country_info}`)
        const data = await response.json()
        console.log(data);
        setCountry(data)
        }
        else{
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${country_info}`)
            const data = await response.json()
            setCountry(data)
        }
    }

    useEffect(() => {
        getCountry()
    }, [country_info])










  return (
    <div>
        <div className='back'>
            <Link className='back-button' to="/">Back</Link>
        </div>
        
       {country && (
           <div className='country-info'>
               <div className='country-info-image'>
                   <img src={country[0].flags.svg} alt="" />
                </div>
             
               
                <div className='country-info-info'>
                    <h2>{country[0].name.official}</h2>
                    <div className='segment'>

                    <div className='first-segment'>

                        <p><span>Capital: </span>{country[0].capital}</p>
                        <p><span>Population: </span>{country[0].population}</p>
                        <p><span>Languages: </span>{Object.values(country[0].languages).join(' , ')}</p>
                        <p><span>Currency: </span>{Object.values(country[0].currencies)[0].name}</p>
                    </div>
                    <div className='second-segment'>
                        <p><span>Continent: </span>{country[0].continents}</p>
                        <p><span>Region: </span>{country[0].region}</p>
                        <p><span>Sub-region: </span>{country[0].subregion}</p>

                    </div>
                    </div>
                    <p className='border'>Border Countries </p>
                    {country[0].borders && (
                        <div className='region'>
                            {country[0].borders.map((border,index) => {
                                return <Link className='region-link' to={`${border}`} key={index}>{border}</Link>
                            }
                            )}
                        </div>
                    )}
                    <div>
                    

                    <p><a target="blank" href={country[0].maps.googleMaps}>Click here to view map </a></p>
                    </div>

                    
                </div>
            </div>
         )}


       







    </div>
  )
}

export default Country_info