import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/header/Header';
import MovieList from './components/movieList/movieList'
import Movie from './pages/movieDetail/movie';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='movie/:id' element={<Movie />} />
          <Route path='movies/:type' element={<MovieList />} />
          <Route path='/*' element={<h1>Error Page</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
