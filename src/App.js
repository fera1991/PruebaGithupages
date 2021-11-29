import React from 'react';
import Login from './Pages/Login/Login';
import Admin from './Pages/Admin/Admin';
import User from './Pages/User/User';
import PrincipalAdmin from './Pages/Principal/MainAdmin';
import PrincipalUser from './Pages/Principal/MainUser';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Private from './Components/Private/Private';
const App = () => (
  
  <BrowserRouter>
  <Routes>
      <Route path ="/" element={ <Login/>}/>
      <Route path ="/userInfo" element={ <Private role="user"> <User/></Private>}/>
      <Route path ="/adminInfo" element={<Private role="admin"> <Admin/></Private>}/>
      <Route path ="/userInfo/data" element={ <Private role="user"> <PrincipalUser/></Private>}/>
      <Route path ="/adminInfo/data" element={<Private role="admin"> <PrincipalAdmin/></Private>}/>
      <Route path="*" element={<Private/>}/>
    </Routes>
  </BrowserRouter>

);

export default App;