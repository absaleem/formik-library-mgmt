import './App.css';
import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Liststudents from './Liststudents';
import Createstudent from './Createstudent';
import Editstudent from './Editstudent';
import Listbooks from './Listbooks';
import Createbook from './Createbook';
import Editbook from './Editbook';
import Listassignbooks from './Listassignbooks';
import Assignbooks from './Assignbooks';
import Editassignbooks from './Editassignbooks';
function App() {
    return (
    <div>
      
    <Routes>
        <Route path="/" element={ <Dashboard/> } />
        <Route path="Createstudent" element={ <Createstudent/> } />
        <Route path="Editstudent/:userId" element={ <Editstudent/> } />
        <Route path="Liststudents" element={ <Liststudents/> } />
        <Route path="Createbook" element={ <Createbook/> } />
        <Route path="Editbook/:userId" element={ <Editbook/> } />
        <Route path="Listbooks" element={ <Listbooks/> } />
        <Route path="Assignbooks" element={ <Assignbooks/> } />
        <Route path="Editassignbooks/:userId" element={ <Editassignbooks/> } />
        <Route path="Listassignbooks" element={ <Listassignbooks/> } />
      </Routes>
    </div>
  );
} 

export default App;