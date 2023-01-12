import React, { useState, useContext } from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Nav from './Components/nav/Nav';
import ToDo from './Components/ToDo/ToDo';
import Settings from './Components/Settings/Settings';
import { Routes, Route } from "react-router-dom";
import { When } from 'react-if';
import { AuthContext } from './Context/Auth';


const App = () => {
  const [incomplete, setIncomplete] = useState([]);
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={
          <>
            <When condition={isLoggedIn}>
              <Header incomplete={incomplete} />
              <ToDo setIncomplete={setIncomplete} incomplete={incomplete} />
            </When>
          </>
        } />
        <Route path='/settings' element={
        <When condition={isLoggedIn}>
          <Settings />
        </When>
        } />
      </Routes>
      <Footer />
    </>
  );
}

export default App