import React, {useState} from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Nav from './Components/nav/Nav';
import ToDo from './Components/ToDo/ToDo';

const App = () => {
  const [incomplete, setIncomplete] = useState([]);
    return (
      <>
        <Nav/>
        <Header incomplete={incomplete}/>
        <ToDo setIncomplete={setIncomplete} incomplete={incomplete}/>
        <Footer/>
      </>
    );
}

export default App