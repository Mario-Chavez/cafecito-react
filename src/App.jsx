import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import Inicio from "./views/Inicio";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    return (
        <>
            <Menu />
            <Inicio />
            <h1 className="display-4 text-center">Cafecito</h1>
            <hr />
            <Container className="my-5 mainPage">
                <Formulario />
            </Container>
            <Footer />
        </>
    );
}

export default App;
