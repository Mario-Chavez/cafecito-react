// llamar vartiable de entorno
const URL_USUARIO = import.meta.env.VITE_API_USUARIO;

export const login = async (usuario) => {
    try {
        const respuesta = await fetch(URL_USUARIO);
        const listaUsuarios = await respuesta.json();
        console.log(listaUsuarios);
        // buscar si la lista de usuario hay un elelmento igual al q recibimos en ususario
        const ususarioBuscado = listaUsuarios.find(
            (itemUsuario) => itemUsuario.email === usuario.email
        );
        if (ususarioBuscado) {
            console.log("email encontrado");
            if (ususarioBuscado.password === usuario.password) {
                console.log("encontardo el usuario");
                return usuario;
            }
            console.log("no es el mismo password");
        }
        console.log("email no encontrado");
    } catch (error) {}
};
