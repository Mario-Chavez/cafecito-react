import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./views/Inicio";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Administrador from "./views/Administrador";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registro from "./views/Registro";
import Login from "./views/Login";
import DetalleProducto from "./views/DetalleProducto";
import Error404 from "./views/Error404";
import { useState } from "react";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdministardor from "./components/routes/RutasAdministardor";

function App() {
    const usuarioSessionStorage = JSON.parse(sessionStorage.getItem("usuario")) || {};
    const [usuarioLogeado, setUsuarioLogeado] = useState(usuarioSessionStorage);

    return (
        <BrowserRouter>
            <Menu usuarioLogeado={usuarioLogeado} setUsuarioLogeado={setUsuarioLogeado} />
            <Routes>
                <Route exact path="/" element={<Inicio />}></Route>
                <Route exact path="/registro" element={<Registro />}></Route>
                <Route exact path="/detalle" element={<DetalleProducto />}></Route>
                <Route
                    path="/administrador/*"
                    element={
                        <RutasProtegidas>
                            <RutasAdministardor></RutasAdministardor>
                        </RutasProtegidas>
                    }
                ></Route>

                <Route
                    exact
                    path="/login"
                    element={<Login setUsuarioLogeado={setUsuarioLogeado} />}
                ></Route>
                <Route exact path="/error" element={<Error404 />}></Route>
                <Route path="*" element={<Error404 />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
