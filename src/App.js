import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './Components/Pages/Home';
import { Company } from './Components/Company';
import { Contact } from './Components/Pages/Contact';
import { NewProject } from './Components/Pages/NewProject';
import { Contanier } from './Components/Layout/Contanier';
import { Navbar } from './Components/Layout/Navbar';
import { Footer } from './Components/Layout/Footer';
import { Projects } from './Components/Pages/Projects';
import { Project } from './Components/Pages/Project';


function App() {


  
  

  return (
    <Router>
     <Navbar/>
     <Contanier customClass='min-height'>
      <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/Projects' element={<Projects/>}/>
      <Route  path='/NewProject' element={<NewProject/>}/>
      <Route  path='/Company' element={<Company/>}/>
      <Route path='/Project/:id' element={<Project/>}/>
     </Routes> 
     </Contanier>
      <Footer/>
    </Router>
  );
}

export default App;
