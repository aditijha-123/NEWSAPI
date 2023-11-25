
import './App.css';

import React from 'react'
import { Navbar } from './components/Navbar'
import { News } from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route



} from "react-router-dom"

function App() {
  return (


    <div >

      <Router>
        <Navbar />
       
        <Routes>
          <Route exact path="/" element={<News country="in" category="general" />}></Route>
          <Route exact path="/business" element={<News country="in" category="business" />}></Route>
          <Route exact path="/entertainment" element={<News country="in" category="entertainment" />}></Route>
          <Route exact path="/general" element={<News country="in" category="general" />}></Route>
          <Route exact path="/health" element={<News country="in" category="health" />}></Route>
          <Route exact path="/science" element={<News country="in" category="science" />}></Route>
          <Route exact path="/sports" element={<News country="in" category="sports" />}></Route>
          <Route exact path="/technology" element={<News country="in" category="technology" />}></Route>



        </Routes>
      </Router>

    </div>
  );
}


export default App;
