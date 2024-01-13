import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Coursedetails from './components/Coursedetails';
import Home from './components/Home';
import { useState } from 'react';
import Recommended from './components/Recommended';
import Footer from './components/Footer';
import All_context from './context/All_context';
import Sitecontext from './context/Sitecontext';
import { useContext } from 'react';
function App() {
  // const [isChecked, setIsChecked] = useState(false)
  const {isChecked,handleCheckboxChange}=useContext(Sitecontext)
  const all_badges=["IIT","All","GATE","JEE","BITSAT","TS EMCAT","Amity JEE","Govt Exams","JEE Advance"]
  const {exam_data}=useContext(Sitecontext)
  return (
    <>
    {/* <All_context> */}
    <div className={isChecked && "dark"}>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<><Navbar theme_fun={handleCheckboxChange}/><Home/><Recommended heading="Recommended Exams" badges={false} data={exam_data}/><Recommended heading="Recent Exams" badges={all_badges} data={exam_data}/><Footer/></>}></Route>
         <Route path="/:course" element={<Coursedetails/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
    {/* </All_context> */}
    </>
  );
}

export default App;
