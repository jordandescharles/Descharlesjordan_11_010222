import { render } from "react-dom";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from "./App";
import About from "./routes/About";
import NotFound from "./routes/NotFound";
import './css/style.css'

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="About" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

