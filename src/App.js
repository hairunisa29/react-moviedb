import './App.css';
import Header from './Layout/Header';
import BottomNav from './Layout/BottomNav';
import { Container } from '@mui/material';
import { Route, Routes } from "react-router-dom";
import Base from './Layout/Base'


function App() {
  return (
    <div className="App">
      <Base/>
      {/* <Header/>
      <Container>
        <Routes>
          <Route path="/trending" element={<Trending/>}/>
          <Route path="/movies" element={<Movies/>} />
          <Route path="/search" element={<SearchList/>} />
        </Routes>
      </Container>
      <BottomNav/> */}
    </div>
  );
}

export default App;
