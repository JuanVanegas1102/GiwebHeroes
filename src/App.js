import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import React, {useState, useEffect} from 'react';
import Home from './pages/home/Home';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewHero from './pages/NewHero/NewHero';
import DeleteHero from './pages/DeleteHero/DeleteHero';

const App = () => {

  useEffect(() => {
    fetchHeroes();
  }, [])

  const [heroes, setHeroes] = useState(
    {
      1: {
        nombre: '',
        edad: '',
        imagen: '',
        detalles: ''
      }
    }
  )

  const fetchHeroes = async () => {
    const response = await fetch('https://cinemaheroes-eec47-default-rtdb.firebaseio.com/heroes.json')
    const data = await response.json()

    setHeroes(data)
  }

  const sendHeroe = async (heroe) => {
    console.log(heroe)
    const response = await fetch('https://cinemaheroes-eec47-default-rtdb.firebaseio.com/heroes.json', {
      method: 'POST',
      body: JSON.stringify(heroe)
    })
    const data = await response.json()

    console.log(data)
  }
/*
  const deleteHeroe = async (Id) => {
    const response = await fetch('https://cinemaheroes-eec47-default-rtdb.firebaseio.com/heroes.json', {
      method: 'DELETE where id='+Id,
    })
    const data = await response.json()

    console.log(data)
  }

const deleteH = (props) =>{
    Id: {props.heroe.id}
    deleteHeroe({
        Id
    });
}
*/
  const handleSubmit = (heroe) => {

    sendHeroe(heroe)
    fetchHeroes()
  }
/*
  const handleSubmitDelete = (heroe) => {

    deleteH()
    fetchHeroes()
  }
  <Route path='/delete' element={<DeleteHero onSubmit={handleSubmitDelete} />}/>
*/
  //JSX
  return(
    <div style={{  
      backgroundImage: "url(" + "https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28313.jpg" + ")",
    }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/home' element={<Home heroes={heroes}/>}/>
          <Route path='/new' element={<NewHero onSubmit={handleSubmit} />}/>
        </Routes>
        
      </BrowserRouter>

      { <Home heroes={heroes}/>}

    </div>
  )
}

export default App;