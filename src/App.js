import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

import Navbar from './components/Navbar';
import ContactPage from './pages/contactPage';
import HomePage from './pages/homePage';
import MembersPage from './pages/membersPage';
import ProjectsPage from './pages/projectsPage';



function App() {
  return (
    <>
      <Navbar/>
      
      <Routes>
        <Route path='/' element= {<HomePage/>}/>
        <Route path='projects' element= {<ProjectsPage/>}/>
        <Route path='members' element= {<MembersPage/>}/>
        <Route path='contact' element= {<ContactPage/>}/>
      </Routes>

      <Footer></Footer>
    </>
    
  );
}

export default App;
