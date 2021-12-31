import './App.css';
import Header from './Layout/Header';
import BottomNav from './Layout/BottomNav';
import { Container } from '@mui/material';
import { Route, Routes } from "react-router-dom";
import Trending from './Components/Trending';
import Movies from './Components/Movies';
import SearchList from './Components/SearchList';



function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
        {/* <Routes>
          <Route path="/trending" element={<Trending/>} exact/>
          <Route path="/movies" element={<Movies/>} />
          <Route path="/search" element={<SearchList/>} />
        </Routes> */}
      </Container>
      <BottomNav/>
    </div>
  );
}

export default App;
