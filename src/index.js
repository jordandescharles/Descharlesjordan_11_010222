import { render } from "react-dom";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from "./pages/App";
import About from "./pages/About";
import CardPage from "./pages/CardPage";
import NotFound from "./pages/NotFound";
import './css/style.css'

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="About" element={<About />} />
      <Route path="CardPage/:id" element={<CardPage/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

