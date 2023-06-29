import './App.css';
import React, { useState, useEffect } from 'react'
import Loading from './components/Loading';




function App() {

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');

  const [data, setData] = useState(false);

  const [age, setAge] = useState();
  const [gender, setGender] = useState([]);
  const [nation, setNation] = useState([]);



  const toggleName = (event) => {
    setName(event.target.value);
    setData(false);
  }

  const toggleData = () => {
    if (data === false) {
      setData(true);
    } else {
      setData(false);
    }
  }

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => {
        // Extract country code and name
        const countryData = data.map(country => ({
          code: country.alpha2Code,
          name: country.name
        }));
        // Update the countries state
        setCountries(countryData);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, []);

  const getCountryName = countryCode => {
    const country = countries.find(country => country.code === countryCode);
    return country ? country.name : countryCode;
  };

  const fetchData = async () => {
    let url_1 = `https://api.agify.io/?name=${name}`;
    let url_2 = `https://api.genderize.io/?name=${name}`;
    let url_3 = `https://api.nationalize.io/?name=${name}`;
    setLoading(true);
    let data_1 = await fetch(url_1);
    let data_2 = await fetch(url_2);
    let data_3 = await fetch(url_3);

    let parsedData_1 = await data_1.json();
    let parsedData_2 = await data_2.json();
    let parsedData_3 = await data_3.json();
    setAge(parsedData_1.age);
    console.log(parsedData_1);
    console.log(parsedData_2);
    setGender(parsedData_2);
    setNation(parsedData_3.country);
    console.log(parsedData_3.country);
    setLoading(false);
    toggleData();
  };

  return (
    <div className="container my-4">
    <h1 align='center' className='mt-4'>NameGenius</h1>
    <p align='center' className='mb-4'>Unlock the Secrets of Names</p>
    <div className="container"> 
      <input  type="text" className="form-control " placeholder="Enter the name to find the age , gender and country " value={name} onChange={toggleName}></input>
      <button  type="button" className="btn btn-primary mx-2 my-3 " onClick={fetchData}>Go</button>
      <button  type="button" className="btn btn-danger mx-2 my-3 " onClick={toggleData}>Clear</button>
      </div>
      {loading && <Loading/>}
      <div className="container"> 
        {data && <p>Age : {age}</p>}
        {data && <p>Gender : {gender.gender} (chances {gender.probability * 100}%) </p>}

        {data && (
          <div>
            <p>Country:</p>
            {nation.map((ele) => (
              <p key={ele.country_id} className='container  '>
                {getCountryName(ele.country_id)} ({ele.probability * 100.0}%)
              </p>
            ))}
          </div>
        )}
      </div>


    </div>
  );
}

export default App;
