import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import SobreMim from './components/pages/SobreMim';
import Footer from './components/layout/Footer';
import Projects from './components/pages/Projects';
import Tech from './components/pages/Tech';


function App() {
  return (
   <Router>
    <Navbar />
    <Container customClass='min-height'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/sobremim' element={<SobreMim/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/newproject' element={<NewProject/>}/>
      <Route path='/tecnologias' element={<Tech/>}/>
    </Routes>
    </Container>
    <Footer />
   </Router>
  );
}

export default App;
