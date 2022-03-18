import './App.scss';
import Header from './components/Header/Header'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Main from './components/Main/Main';
import NSDContract from './components/NSDContract/NSDContract';
import Swot from './components/Swot/Swot';
import Contact from './components/Contact/Contact';
import Rationale from './components/Rationale/Rationale';
import JobSpec from './components/JobSpec/JobSpec';
import Plan from './components/Plan/Plan';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        
        <Route path="/"  exact element={<Main/>}/>
        <Route path="/rationale"  exact element={<Rationale/>}/>
        <Route path="/nsd" element={<NSDContract/>}/>
        <Route path="/swot" element={<Swot/>}/>
        <Route path="/job" element={<JobSpec/>}/>
        <Route path="/plan" element={<Plan/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
