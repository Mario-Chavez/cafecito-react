import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
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
            <Footer />
        </>
    );
}

export default App;
