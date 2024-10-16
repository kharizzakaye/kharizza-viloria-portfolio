import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import "./styles/main.css";
import Homepage from './pages/Homepage';
import FizziSoda from './pages/FizziSoda';
import DessertsShop from './pages/DessertsShop';
import WhereInTheWorld from './pages/WhereInTheWorld';
import JigsawInventory from './pages/JigsawInventory';
import DesignPortfolio from './pages/DesignPortfolio';
import UIComponents from './pages/UIComponents';
import PetDex from './pages/PetDex';
import GraphicDesign from './pages/GraphicDesign';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/fizzi-soda" element={<FizziSoda />} />
          <Route path="/desserts-shop" element={<DessertsShop />} />
          <Route path="/where-in-the-world" element={<WhereInTheWorld />} />
          <Route path="/jigsaw-inventory" element={<JigsawInventory />} />
          <Route path="/design-portfolio" element={<DesignPortfolio />} />
          <Route path="/ui-components" element={<UIComponents />} />
          <Route path="/pet-dex" element={<PetDex />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          {/* <Route path={process.env.REACT_APP_URL_COUNTRY_DETAILS_PAGE} element={<CountryDetailsPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
