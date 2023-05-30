import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import Inicio from "./views/Inicio";

function App() {
    return (
        <>
            <Inicio />
            <Container className="my-5 mainPage">
                <h1 className="display-4 text-center">Cafecito</h1>
                <hr />
                <Formulario />
            </Container>
            <footer className="bg-dark text-light text-center py-5">
                <p> &copy; Todos los derechos reservados</p>
            </footer>
        </>
    );
}

export default App;
