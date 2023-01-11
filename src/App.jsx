import React, {useState} from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Nav from './Components/nav/Nav';
import ToDo from './Components/ToDo/ToDo';
import Settings from './Components/Settings/Settings';
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [incomplete, setIncomplete] = useState([]);
    return (
      <>
        <Nav/>
        <Routes>
          <Route path='/' element={
            <>
              <Header incomplete={incomplete}/>
              <ToDo setIncomplete={setIncomplete} incomplete={incomplete}/>
            </>
          }/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
        <Footer/>
      </>
    );  
}

export default App