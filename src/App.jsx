import logo from './logo.svg';
import './App.css';
// import Link from './Components/Link'
import MiniDrawer from './Components/MiniDrawer';

import {Outlet} from 'react-router-dom'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function App() {

  let navigateHome=useNavigate()
  let loadHome=()=>[navigateHome('/Dashboards/Analytics')]
  
  useEffect(()=>{
    loadHome()
  },[]
  )

  return (
    <div className="App">
      {/* <Link></Link> */}
      <MiniDrawer></MiniDrawer>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
