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
import PageNotFound from './pages/PageNotFound';
import PhotoRestoration from './pages/PhotoRestoration';
import PhotoEditing from './pages/PhotoEditing';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path={process.env.REACT_APP_URL_FIZZI_SODA} element={<FizziSoda />} />
          <Route path={process.env.REACT_APP_URL_DESSERTS_SHOP} element={<DessertsShop />} />
          <Route path={process.env.REACT_APP_URL_WHERE_IN_THE_WORLD} element={<WhereInTheWorld />} />
          <Route path={process.env.REACT_APP_URL_JIGSAW_INVENTORY} element={<JigsawInventory />} />
          <Route path={process.env.REACT_APP_URL_DESIGN_PORTFOLIO} element={<DesignPortfolio />} />
          <Route path={process.env.REACT_APP_URL_UI_COMPONENTS} element={<UIComponents />} />
          <Route path={process.env.REACT_APP_URL_PET_DEX} element={<PetDex />} />
          <Route path={process.env.REACT_APP_URL_GRAPHIC_DESIGN} element={<GraphicDesign />} />
          <Route path={process.env.REACT_APP_URL_PHOTO_RESTORATION} element={<PhotoRestoration />} />
          <Route path={process.env.REACT_APP_URL_PHOTO_EDITING} element={<PhotoEditing />} />
          <Route path="*" element={<PageNotFound /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
