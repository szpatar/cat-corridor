import './App.css';
import Cat from './cat'
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from 'react';
function App() {

  const [cats, setCats] = useState([]);
  const [submit, setSubmit] = useState('');
  const [request, setRequest] = useState('Cat'); // default paraméter

useEffect( () => {
      getCats();
    }, [request]);  // akkor fut le mikor leadunk egy kérést 

  const updateSubmit = evt => {
    setSubmit(evt.target.value);  // az input értéke
  }

  const getSubmit = evt => {
    evt.preventDefault();
    if(submit===""){
      submit= "xD"
      setRequest(submit)
      }
      setRequest(submit)
    }

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'cats-by-api-ninjas.p.rapidapi.com',
      'X-RapidAPI-Key': 'b5620bee48mshc25c18772c35a60p18fc12jsnd825cdcc510a'
    }
  };

  const getCats = async () => {
    const resp = await fetch(`https://cats-by-api-ninjas.p.rapidapi.com/v1/cats?name=${request}`, options);
    const catData = await resp.json();
    setCats(catData);
    console.log(catData)
    }

//Onchange - Update submit -> változáskor
  return (
    // ---------------   HTML  --------------- //
    <div className="App">
      <header>
        <nav class="navbar bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"> 
              Cat corridor
            </a>
            <nav class="navbar bg-light">
              <div class="container-fluid">
                <form class="d-flex" role="search" onSubmit={getSubmit}>
                  <input class="form-control me-2" type="search" placeholder="Search for a furry friend, like: persian, aegean, maine coon etc..." aria-label="Search" value={submit} onChange={updateSubmit}/>  
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </nav>
          </div>
        </nav>
      </header>
      
     
      {cats.map(cat => (
        <Cat 
        name={cat.name} 
        origin={cat.origin}
        length={cat.length}
        image={cat.image_link}
        family_friendly={cat.family_friendly}
        life_expectancy={cat.max_life_expectancy}
        meowing={cat.meowing}
        max_weight={cat.max_weight}
        grooming={cat.grooming}
        key={cat.name}/>
      ))}
      

      

    </div>
    // ---------------   HTML  --------------- //
  );
}

export default App;
