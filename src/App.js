import { Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar';

import Home from "./pages/home"
import Projects from "./pages/projects"
import Members from "./pages/members"
import Contact from "./pages/contact"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='projects' element= {<Projects/>}/>
        <Route path='members' element= {<Members/>}/>
        <Route path='contact' element= {<Contact/>}/>
      </Routes>
    </>
    
  );
}

export default App;
