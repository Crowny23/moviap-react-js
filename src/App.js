import logo from './logo.svg'
import './App.css'
import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import HomeView from './Views/HomeView'
import MovieCard from './Components/MovieCard'
import SearchView from './Views/SearchView'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className='title'>THE MOVIAP</h1>
          <Router>
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/search'>Search</Link>
            </nav>
            <Routes>
              <Route exact path='/' element={<HomeView/>}/>
              <Route path='/search' element={<SearchView/>}/>
              <Route path='/movie/:id' element={<MovieCard/>}/>
            </Routes>
          </Router>
        </header>
      </div>
    )
  }
}


export default App