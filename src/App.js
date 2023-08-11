import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Signup from "./components/Signup";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/noteState"

import AlertState from "./context/notes/alertState";
import AlertBar from "./components/AlertBar";

function App() {
 
  return (
    <>
      <NoteState>
      <AlertState>
       
          

        <BrowserRouter>
          <NavBar />
          
          <AlertBar/>
          
          <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
          </div>
        </BrowserRouter>
        </AlertState>
      </NoteState>
    </>
  );
}

export default App;
