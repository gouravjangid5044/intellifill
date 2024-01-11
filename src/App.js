import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Coursedetails from './components/Coursedetails';
function App() {
  return (
    <>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Navbar/>}></Route>
         <Route path="/:course" element={<Coursedetails/>}></Route>
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
