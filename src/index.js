import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Analytics from './Components/Analytics'
import CRM from './Components/CRM'
import Ecommerce from './Components/Ecommerce'
import NotFound from './Components/NotFound'
import Dashboards from './Components/Dashboards'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App></App>}>
          <Route path='/Dashboards' element={<Dashboards></Dashboards>}>
              <Route path='/Dashboards/Analytics' element={<Analytics></Analytics>}></Route>
              <Route path='/Dashboards/CRM' element={<CRM></CRM>}></Route>
              <Route path='/Dashboards/Ecommerce' element={<Ecommerce></Ecommerce>}></Route>
          </Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
