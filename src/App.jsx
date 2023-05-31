import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./views/Inicio";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registro from "./views/Registro";
import Error404 from "./views/Error404";

function App() {
    return (
        <BrowserRouter>
            <Menu />

            <Routes>
                <Route exact path="/" element={<Inicio />}></Route>
                <Route exact path="/registro" element={<Registro />}></Route>
                <Route path="*" element={<Error404 />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
