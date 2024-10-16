import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import "./styles/main.css";
import Homepage from './pages/Homepage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path={process.env.REACT_APP_URL_COUNTRY_DETAILS_PAGE} element={<CountryDetailsPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
